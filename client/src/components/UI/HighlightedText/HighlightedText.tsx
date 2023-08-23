import { Highlight } from '../Highlight';

export type HighlightedProps = {
  color?: string;
  text: string;
  keywords: string[];
};

type Chunk = {
  word: string;
  matched: boolean;
};

export const HighlightedText = ({ color = '#00B1BB', text, keywords }: HighlightedProps) => {
  const refinedKeywords = keywords.map(keyword => keyword.replace(/[()\\[\]+]/g, '\\$&'));
  const splitter = refinedKeywords.length > 0 ? new RegExp(`(${refinedKeywords.join('|')})`, 'i') : null;
  const splitText = splitter ? text.split(splitter) : [text];
  const chunks: Chunk[] = splitText.map(chunk => ({ word: chunk, matched: Boolean(splitter && splitter.test(chunk)) }));

  return (
    <>
      {chunks.map(({ word, matched }, index) =>
        matched ? (
          <Highlight key={`${index}-${word}`} color={color}>
            {word}
          </Highlight>
        ) : (
          word
        )
      )}
    </>
  );
};