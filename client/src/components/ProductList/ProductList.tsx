import type { ReactElement } from 'react';
import { memo } from 'react';
import type { Product } from '@api';
import styled from '@emotion/styled';
import { ProductItem } from '../ProductItem';

type ProductListProps = {
  products: Product[];
  cartControllCompoent?: (id: number) => ReactElement;
};

export const ProductList = memo(function (props: ProductListProps) {
  const { products, cartControllCompoent } = props;

  return (
    <List>
      {products.map(product => (
        <Item key={product.id}>
          <ProductItem product={product} cartControllCompoent={cartControllCompoent} />
        </Item>
      ))}
    </List>
  );
});

const List = styled.ul`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0 20px;
`;

const Item = styled.li`
  width: calc(50% - 8px);
`;

