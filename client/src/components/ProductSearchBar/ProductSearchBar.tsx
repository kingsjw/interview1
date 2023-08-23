import styled from '@emotion/styled';
import { Button } from '@ui-components';
import { Remove } from '@ui-icons';
import { ProductSearchAutoCompleteBar } from '../ProductSearchAutoCompleteBar';

type ProductSearchBarProps = {
  keyword?: string;
};

export const ProductSearchBar = ({ keyword = '' }: ProductSearchBarProps) => {
  return (
    <ProductSearchAutoCompleteBar
      value={keyword}
      clearButton={clear => (
        <RemoveButtonContainer>
          <Button onClick={clear}>
            <Remove width={14} height={14} />
          </Button>
        </RemoveButtonContainer>
      )}
    />
  );
};

const RemoveButtonContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
