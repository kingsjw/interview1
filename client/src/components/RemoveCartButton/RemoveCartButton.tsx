import styled from '@emotion/styled';
import { Button } from '@ui-components';
import { Remove } from '@ui-icons';
import { useCartContext } from '@context';

type RemoveCartButtonProps = {
  id: number;
};

export const RemoveCartButton = ({ id }: RemoveCartButtonProps) => {
  const { removeCartProduct } = useCartContext();

  const handleRemoveCartButton = () => {
    removeCartProduct(id);
  };

  return (
    <RemoveCartButtonContainer>
      <Button
        width={14}
        height={14}
        onClick={handleRemoveCartButton}
      >
        <Remove width={14} height={14} />
      </Button>
    </RemoveCartButtonContainer>
  );
};

const RemoveCartButtonContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 6px;
  right: 6px;
`;

