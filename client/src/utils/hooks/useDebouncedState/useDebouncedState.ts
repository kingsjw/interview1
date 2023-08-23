import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { useDebouncedEffect } from '../useDebouncedEffect';

export const useDebouncedState = <State>(
  initialState: State,
  delay: number
): [State, Dispatch<SetStateAction<State>>] => {
  const [originalValue, setOriginalValue] = useState<State>(initialState);
  const [debouncedValue, setDebouncedValue] = useState<State>(initialState);

  useDebouncedEffect(
    () => {
      setDebouncedValue(originalValue);
    },
    [originalValue],
    delay
  );

  return [debouncedValue, setOriginalValue];
};
