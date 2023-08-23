import { useQuery } from 'react-query';
import { ProductList } from '../ProductList';
import { RemoveCartButton } from '../RemoveCartButton';
import { getProducts } from '@api';
import { useCartContext } from '@context';

export const CartProductReulst = () => {
  const { cartProducts } = useCartContext();
  const { data: productsData } = useQuery(['products'], () => getProducts({}));
  const products = productsData?.filter(({ id }) => cartProducts.includes(id)) ?? [];

  return (
    <>
      <ProductList
        products={products}
        cartControllCompoent={id => (
          <RemoveCartButton id={id} />
        )}
      />
    </>
  );
};
