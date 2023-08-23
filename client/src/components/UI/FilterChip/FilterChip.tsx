import { Button } from '@ui-components';
import { CloseAccent } from '@ui-icons';
import styled from '@emotion/styled';

type FilterChipProps = {
  label: string;
  onClick?: () => void;
};

export const FilterChip = (props: FilterChipProps) => {
  const { label, onClick } = props;

  return (
    <FilterChipContainer>
      <Label>{label}</Label>
      <Button width={24} height={24} onClick={onClick}>
        <CloseAccentContainer>
          <CloseAccent width={20} height={20} />
        </CloseAccentContainer>
      </Button>
    </FilterChipContainer>
  );
};

const FilterChipContainer = styled.div`
  background-color: #fff;
  border: 1px solid #24ABBE;
  border-radius: 16px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-size: 14px;
  color: #24ABBE;
`;

const CloseAccentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;