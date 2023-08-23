import type { KeyboardEvent } from 'react';


export const isEnter = (event: KeyboardEvent) => {
  return event.key === "Enter";
};
