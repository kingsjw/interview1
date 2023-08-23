import styled from '@emotion/styled';
import { Button, TabGroup, Tab, Accordion, CheckboxLabel } from '@ui-components';
import { useEffect, useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { getProductCategories } from '@api';

type ProductFilterContentsProps = {
  onCompleted?: () => void;
};

export const ProductFilterContents = (props: ProductFilterContentsProps) => {
  const { onCompleted } = props;
  const { push, query } = useRouter();
  const keyword = query.query as string ?? '';
  const { data: categoriesData } = useQuery(['categories'], getProductCategories);
  const categories = useMemo(() => categoriesData ?? [], [categoriesData]);
  const tabs = useMemo(() => categories.map(({ name }) => name) ?? [], [categories]);
  const [tabId, setTabId] = useState('');
  const currentAccordion = useMemo(() => categories?.find((item) => item.name === tabId)?.children ?? [], [tabId, categories]);
  const filter = query.filter && Array.isArray(query.filter) ? query.filter : typeof query.filter === 'string' ? [query.filter] : [];
  const [selectedFilter, setSelectedFilter] = useState<string[]>(filter);

  useEffect(() => {
    if (!tabId && !selectedFilter.length) {
      setTabId(tabs[0]);

      return;
    }

    if (!tabId && selectedFilter.length) {
      const selectedCategoryIndex = categories.findIndex(category => category.children.some(categoryChild => categoryChild.children.some(child => selectedFilter.includes(child))));

      setTabId(tabs[selectedCategoryIndex]);

      return;
    }
  }, [tabs, tabId, selectedFilter]);


  const handleTabChange = (id: string) => {
    setTabId(id);
  };

  const handleCheckboxChange = (smallCategory: string) => {
    setSelectedFilter(prev => {
      const updatedFilter = prev.includes(smallCategory) ? prev.filter(item => item !== smallCategory) : [...prev, smallCategory];

      return updatedFilter;
    });
  };

  const submit = () => {
    const query = {
      query: keyword,
      filter: selectedFilter,
    };
    push({
      pathname: '/products',
      query,
    });

    onCompleted?.();
  };

  const isActive = selectedFilter.length > 0;

  return (
    <>
      <TabGroupContainer>
        <TabGroup tabId={tabId} onTabChange={handleTabChange}>
          {tabs.map(tab => (
            <Tab key={tab} title={tab} id={tab} active={tabId === tab} />
          ))}
        </TabGroup>
      </TabGroupContainer>
      <AccordionContainer>
        {currentAccordion.map(({ key, children }) => (
          <Accordion
            key={key}
            title={key}
            defaultOpened={selectedFilter.some(item => children.includes(item))}
            content={
              <ContentsContainer>
                {children.map(child => (
                  <CheckboxContainer
                    key={child}
                    onClick={() => handleCheckboxChange(child)}
                  >
                    <CheckboxLabel key={child} label={child} checked={selectedFilter.includes(child)} />
                  </CheckboxContainer>
                ))}
              </ContentsContainer>
            }
          />
        ))}
      </AccordionContainer>
      <div style={{ height: 100 }} />
      <SubmitButtonContainer active={isActive}>
        <Button
          width="100%"
          height={56}
          onClick={submit}
        >선택 완료</Button>
      </SubmitButtonContainer>
    </>
  );
};

const TabGroupContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
`;

const AccordionContainer = styled.div`
  margin-top: 16px;
  padding: 0 20px;
`;

const ContentsContainer = styled.div`
  & > div: last-child {
    border-bottom: none;
  }
`;

const CheckboxContainer = styled.div`
  padding: 13px 20px;
  cursor: pointer;
  border-bottom: 1px solid #F4F5F7;
`;

const SubmitButtonContainer = styled.div(({ active }: { active: boolean }) => `
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20px 8px 20px 24px;
  background-color: #fff;
  button {
    background-color: ${active ? '#24ABBE' : '#EBEDF0'};
    color: ${active ? '#fff' : '#CDD1D6'};
    font-weight: 600;
    border-radius: 16px;
  }
`);

