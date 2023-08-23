import { ProductFilterBottomSheetWithButton } from '../ProductFilterBottomSheetWithButton';
import { ProductFilterChip } from '../ProductFilterChip';
import styled from '@emotion/styled';

export const ProductFilterBar = () => (
  <ProductFilterBarContainer>
    <ProductFilterChip />
    <ProductFilterBottomSheetWithButton />
  </ProductFilterBarContainer>
);

const ProductFilterBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 22px 20px;
`;
