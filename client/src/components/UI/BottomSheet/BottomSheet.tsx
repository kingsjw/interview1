import Sheet, { SheetRef } from 'react-modal-sheet';
import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Close } from '@ui-icons';
import { Button } from '../Button';
import styled from '@emotion/styled';

type BottomSheetProps = {
  title: string;
  renderOpener?: (_: { openModal: () => void; isModalOpened: boolean }) => ReactElement;
  renderContent: (_: { closeModal: () => void }) => ReactElement;
};

export const BottomSheet = (props: BottomSheetProps) => {
  const { title, renderOpener, renderContent } = props;
  const [isOpened, setIsOpened] = useState(false);
  const backDropRef = useRef<any>(null);
  
  const handleClose = () => {
    setIsOpened(false);
  };

  useEffect(() => {
    backDropRef.current?.addEventListener('click', handleClose);

    return () => {
      backDropRef.current?.removeEventListener('click', handleClose);
    };
  }, [backDropRef, handleClose]);


  return (
    <>
      {renderOpener?.({ openModal: () => setIsOpened(true), isModalOpened: isOpened })}
      <CustomSheet
        isOpen={isOpened}
        onClose={handleClose}
        detent="content-height"
        disableDrag={true}
      >
        <Sheet.Container>
          <Sheet.Header>
            <CustomModalSheetHeader>
              <Title>{title}</Title>
              <Button onClick={handleClose}>
                <Close width={24} height={24} />
              </Button>
            </CustomModalSheetHeader>
          </Sheet.Header>
          <div style={{ overscrollBehavior: 'none' }}>
            <Sheet.Content>
              <Sheet.Scroller>
                {renderContent({ closeModal: handleClose })}
              </Sheet.Scroller>
            </Sheet.Content>
          </div>
        </Sheet.Container>
        <Sheet.Backdrop ref={backDropRef} />
      </CustomSheet>
    </>
  )
};

const CustomModalSheetHeader = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 8px 20px;
`;

const Title = styled.span`
  font-size: 19px;
  font-weight: 700;
  line-height: 26px;
`;

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
    background-color: rgba(0, 0, 0, 0.4) !important;
    z-index: 2 !important;
    pointer-events: auto !important;
  }
  .react-modal-sheet-container {
    /* custom styles */
    border-top-right-radius: 24px !important;
    border-top-left-radius: 24px !important;
    z-index: 3 !important;
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    /* custom styles */
    height: 442px;
    touch-action: none;
  }

  .react-modal-sheet-scroller {
    overscroll-behavior: contain;
  }
`;