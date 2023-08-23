import { useState } from 'react';
import type { ReactElement } from 'react';
import styled from '@emotion/styled';
import { ChevronUp, ChevronDown } from '@ui-icons';

export type AccordionProps = {
  title: ReactElement | string;
  content: ReactElement | string;
  defaultOpened?: boolean;
  onChange?: () => void;
};

export const Accordion = (props: AccordionProps) => {
  const { title, content, defaultOpened, onChange } = props;
  const [isOpened, setIsOpened] = useState(defaultOpened);

  const handleClick = () => {
    setIsOpened(!isOpened);

    onChange?.();
  };

  return (
    <AccordionContainer>
      <TitleContainer onClick={handleClick}>
        {typeof title === 'string' ? (
          <Title>{title}</Title>
        ) : (
          title
        )}

        <div>
          {isOpened ? (
            <ChevronUp width={24} height={24} />
          ) : (
            <ChevronDown width={24} height={24} />
          )}
        </div>
      </TitleContainer>
      
      {isOpened &&
        (typeof content === 'string' ? (
          <ContentContainer>
            <Content>
              {content}
            </Content>
          </ContentContainer>
        ) : (
          content
        ))}
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  padding-top: 12px;
  border-bottom: 1px solid #F4F5F7;
`;

const TitleContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
`;

const ContentContainer = styled.div`
  padding: 12px 20px;
`;

const Content = styled.span`
  font-size: 14px;
  line-height: 22px;
`;

