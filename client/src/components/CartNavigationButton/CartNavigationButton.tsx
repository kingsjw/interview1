import { Button } from '@ui-components';
import { Cart } from '@ui-icons';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCartContext } from '@context';
import { useEffect, useState } from 'react';

export const CartNavigationButton = () => {
  const { push } = useRouter();
  const { cartProducts } = useCartContext();
  const [count, setCount] = useState(0);

  const handleCartNavigationButtonClick = () => {
    push({
      pathname: '/cart',
    });
  };

  useEffect(() => {
    setCount(cartProducts?.length ?? 0);
  }, [cartProducts]);

  return (
    <CartNavigationButtonContainer onClick={handleCartNavigationButtonClick}>
      {Boolean(count) && <CountBox>{count}</CountBox>}
      <Button>
        <Cart width={18} height={18} />
      </Button>
    </CartNavigationButtonContainer>
  ); 
};

const CartNavigationButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CountBox = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #FF5630;
  font-size: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
