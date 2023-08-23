import type { ReactElement } from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  children: ReactElement | string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
};

export const Button = ({ children, width, height, onClick, type = 'button', ...props }: ButtonProps) => {
  return (
    <StyledButton
      width={typeof width === 'number' ? `${width}px` : typeof width === 'string' ? width : 'auto'}
      height={typeof height === 'number' ? `${height}px` : typeof height === 'string' ? height : 'auto'}
      onClick={onClick}
      type={type}
      {...props}
    >{children}</StyledButton>
  );
};

const StyledButton = styled.button(({ width, height }: { width: string; height: string }) => `
  width: ${width};
  height: ${height};
  display: block;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`);
