import type { ReactElement } from 'react';
import styled from '@emotion/styled';

export type HighlightProps = {
  color?: string;
  weight?: boolean;
  onClick?: () => void;
  children: ReactElement | string;
};

export const Highlight = ({
  children,
  color,
  weight = false,
  onClick,
}: HighlightProps) => (
  <StyledHighlight
    color={color}
    bold={weight}
    onClick={() => {
      onClick?.();
    }}
  >
    {children}
  </StyledHighlight>
);

const StyledHighlight = styled.span(({ color, bold }: { color?: string; bold: boolean }) => `
  color: ${color ? color : 'black'};
  font-weight: ${bold ? 'bold' : 'normal'};
`);
