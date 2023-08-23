import styled from '@emotion/styled';
import { Button } from '@ui-components';
import { Cart } from '@ui-icons';
import { memo } from 'react';
import { useCartContext } from '@context';

type AddCartButtonProps = {
  id: number;
};

export const AddCartButton = memo(function (props: AddCartButtonProps) {
  const { id } = props;
  const { cartProducts, addCartProduct } = useCartContext();
  
  const addCart = () => {
    const isInCart = cartProducts.includes(id);

    if (isInCart) {
      window.alert('이미 장바구니에 담겨있습니다');

      return;
    }

    addCartProduct(id);
  };

  return (
    <AddCart>
      <Button onClick={addCart} width={18} height={18}>
        <Cart width={18} height={18} />
      </Button>
    </AddCart>
  );
});

const AddCart = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #1C1C1C;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
`;