import styled from '@emotion/styled';
import { Filter } from '@ui-icons';
import { Button, BottomSheet } from '@ui-components';
import { ProductFilterContents } from '../ProductFilterContents';

export const ProductFilterBottomSheetWithButton = () => {
  return (
    <ProductFilterBottomSheetWithButtonContainer>
      <BottomSheet
        title="카테고리"
        renderOpener={({ openModal }) => (
          <Button onClick={openModal}>
            <Filter width={18} height={12} />
          </Button>
        )}
        renderContent={({ closeModal }) => (
          <ProductFilterContents onCompleted={closeModal} />
        )}
      />
    </ProductFilterBottomSheetWithButtonContainer>
  );
};

const ProductFilterBottomSheetWithButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
`;
