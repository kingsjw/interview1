import { Children, useRef, useEffect, isValidElement, forwardRef, cloneElement,  Fragment } from 'react';
import type { ReactElement, ForwardedRef, FC } from 'react';
import styled from '@emotion/styled';
import type { TabProps } from '../Tab';

type TabGroupProps = {
  tabId: string;
  children: ReactElement<TabProps>[];
  onTabChange?: (tabId: string) => void;
}

export const TabGroup: FC<TabGroupProps> =({ tabId, children, onTabChange }) => {
  const tabElements = (Children.toArray(children).filter(child => isValidElement(child)) as typeof children) ?? [];
  const tabRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    if (!tabRefs.current[tabId]) {
      return;
    }
    tabRefs.current[tabId].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }, [tabId]);

  return (
    <StyledTabGroup>
      {tabElements.map((element: ReactElement) => (
        <Fragment key={element.props.id}>
          {cloneElement(element, {
            active: element.props.id === tabId,
            onClick: onTabChange,
            ref: (domRef: HTMLElement | null) => {
              if (!domRef) {
                return;
              }
              tabRefs.current[element.props.id] = domRef;
            },
          })}
        </Fragment>
      ))}
    </StyledTabGroup>
  );
};

const StyledTabGroup = styled.div`
  overflow: scroll;
  margin-bottom: -1px;
  border-bottom: 1px solid #F4F5F7;
  padding: 0 12px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
