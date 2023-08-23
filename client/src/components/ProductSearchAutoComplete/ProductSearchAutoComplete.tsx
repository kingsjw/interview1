import styled from '@emotion/styled';
import { SearchArrow } from '@ui-icons';
import { HighlightedText } from '@ui-components';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getProductsAutoCompleted } from '@api';
import { useDebouncedState } from '@utils';
import { useEffect, useMemo } from 'react';

type ProductSearchAutoCompleteProps = {
  keyword: string;
}

export const ProductSearchAutoComplete = (props: ProductSearchAutoCompleteProps) => {
  const { keyword } = props;
  const [debouncedKeyword, setDebouncedKeyword] = useDebouncedState('', 300);
  const { push } = useRouter();
  
  const { data: productsAutoCompleted } = useQuery(
    ['productsAutoCompleted', debouncedKeyword],
    () => getProductsAutoCompleted(debouncedKeyword),
  );

  const handleItemClick = (item: string) => {
    push({
      pathname: '/products',
      query: {
        query: item,
      },
    });
  };

  const autoCompletedProducts = useMemo(() => (productsAutoCompleted || []), [productsAutoCompleted]);

  useEffect(() => {
    setDebouncedKeyword(keyword);
  }, [keyword]);

  return (
    <List>
      {autoCompletedProducts.map((title, index) => (
        <Item key={`${title}-${index}`} onClick={() => handleItemClick(title)}>
          <TitleContainer>
            <Title>
              <HighlightedText keywords={keyword.split('')} text={title} />
            </Title>
          </TitleContainer>
          <SearchArrowIcon width={18} height={18} />
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  width: 100%;
  background-color: #fff;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 10px 20px;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 22px;
`;

const SearchArrowIcon = styled(SearchArrow)`
  width: 24px;
  height: 24px;
`;
