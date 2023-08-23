import type { KeyboardEvent, ReactElement } from 'react';
import styled from '@emotion/styled';
import { SearchInput } from '@ui-components';
import { useEffect, useState } from 'react';
import { isEnter, useDebouncedState } from '@utils';
import { ProductSearchAutoComplete, CartNavigationButton } from '@components';
import { useRouter } from 'next/router';

type ProductSearchAutoCompleteBarProps = {
  value?: string;
  clearButton?: (clear: () => void) => ReactElement;
};

export const ProductSearchAutoCompleteBar = (props: ProductSearchAutoCompleteBarProps) => {
  const { clearButton, value = '' } = props;
  const [keyword, setKeyword] = useState(value);
  const [focused, setFocused] = useState(false);
  const [openedAutoComplete, setOpenedAutoComplete] = useDebouncedState(false, 100);
  const { push } = useRouter();

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleKeywordChange = (willChangeKeyword: string) => {
    setKeyword(willChangeKeyword);
  }

  const clearKeyword = () => {
    setKeyword('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (isEnter(event)) {
      setFocused(false);

      push({
        pathname: '/products',
        query: {
          query: keyword,
        },
      });
    }
  };

  useEffect(() => {
    setKeyword(value);
  }, [value]);

  useEffect(() => {
    setOpenedAutoComplete(focused);
  }, [focused]);
  
  return (
    <StyledProductSearch>
      <SearchArea>
        <SearchInputContainer active={focused}>
          <SearchInput
            value={keyword}
            onChange={handleKeywordChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
          {clearButton?.(clearKeyword)}
        </SearchInputContainer>
        <CartButtonContainer>
          <CartNavigationButton />
        </CartButtonContainer>
      </SearchArea>
      <ProductSearchAutoCompleteContainer>
        <ProductSearchAutoCompletePosition>
          {openedAutoComplete && <ProductSearchAutoComplete keyword={keyword} />}
        </ProductSearchAutoCompletePosition>
      </ProductSearchAutoCompleteContainer>
    </StyledProductSearch>
  );
};

const StyledProductSearch = styled.div`
  width: 100%;
`;

const SearchArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 20px;
`;

const SearchInputContainer = styled.div(({ active }: { active: boolean }) => `
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid ${active ? '#00B1BB' : '#DEE6E7'};
  border-radius: 8px;
  overflow: hidden;
  padding: 8px 12px;
`);

const CartButtonContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const ProductSearchAutoCompleteContainer = styled.div`
  position: relative;
`;

const ProductSearchAutoCompletePosition = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
`;