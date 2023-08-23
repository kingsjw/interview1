import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getProducts } from '@api';
import { ProductList } from '../ProductList'
import { ProductFilterBar } from '../ProductFilterBar';
import { AddCartButton } from '../AddCartButton';

type ProductSearchResultProps = {
  keyword?: string;
  filter?: string[];
};

export const ProductSearchResult = (props: ProductSearchResultProps) => {
  const { keyword = '', filter = [] } = props;
  const queryKey = ['products', keyword, filter];
  const { data: productsData } = useQuery(
    queryKey,
    () => getProducts({ query: keyword, filter }),
  );

  const products = productsData ?? [];

  return (
    <>
      <ProductFilterBar />
      <ProductList
        products={products ?? []}
        cartControllCompoent={id => (
          <AddCartButtonContainer>
            <AddCartButton id={id} />
          </AddCartButtonContainer>
        )} />
    </>
  );
};

const AddCartButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
