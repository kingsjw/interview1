import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Checked } from '@ui-icons';

type CheckboxProps = {
  label: string;
  checked?: boolean;
};

export const CheckboxLabel = ({ label, checked }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Label>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} css={inputStyle} />
      <CheckIcon>
        {isChecked && <Checked width={16} height={16} />}
      </CheckIcon>
      <LabelText>{label}</LabelText>
    </Label>
  );
};
const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 24px;
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #fff;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid #DEE6E7;
`;

const inputStyle = css`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:checked + div {
    border: none;
    background-color: #24ABBE;
  }
`;

const LabelText = styled.span`
  font-size: 14px;
  margin-left: 8px;
`;
