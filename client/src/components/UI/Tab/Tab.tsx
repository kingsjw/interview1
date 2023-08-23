import { forwardRef } from 'react';
import type { ForwardedRef } from 'react';
import styled from '@emotion/styled';

export type TabProps = {
  title: string;
  active?: boolean;
  id: string;
  onClick?: (id: string) => void;
};

export const Tab = forwardRef((props: TabProps, ref: ForwardedRef<any>) => {
  const { title, id, active, onClick } = props;

  return (
    <StyledTab onClick={() => onClick?.(id)} ref={ref} active={Boolean(active)}>
      <Title>
        {title}
      </Title>
    </StyledTab>
  );
});

const StyledTab = styled.div(({ active }: { active: boolean }) => `
  display: inline-flex;
  border-bottom: 2px solid ${active ? '#000' : 'transparent'};
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  margin: 0 8px;
  flex-grow: 1;
  flex-shrink: 0;
`);

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
`;