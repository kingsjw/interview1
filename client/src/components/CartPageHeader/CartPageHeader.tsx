import styled from '@emotion/styled';
import { Button } from '@ui-components';;
import { Back } from '@ui-icons';
import { useRouter } from 'next/router';


export const CartPageHeader = () => {
  const { back } = useRouter();

  const handleClickBackButton = () => {
    back();
  };

  return (
    <CartPageHeaderContainer>
      <BackButtonContainer>
        <Button width={24} height={24} onClick={handleClickBackButton}>
          <Back width={24} height={24} />
        </Button>
      </BackButtonContainer>
      <Title>장바구니</Title>
    </CartPageHeaderContainer>
  );
};

const CartPageHeaderContainer = styled.div`
  display: flex;
  padding: 14px 16px;
  position: relative;
  width: 100%;
  align-items: center;
`;

const BackButtonContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 12px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  text-align: center;
`;
