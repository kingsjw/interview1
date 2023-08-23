import type { ChangeEvent, KeyboardEvent, ForwardedRef } from "react";
import styled from '@emotion/styled';

type SearchInputProps = {
  value?: string;
  placeholder?: string;
  ref?: ForwardedRef<HTMLInputElement | null>
  onChange?: (keyword: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchInput = (props: SearchInputProps) => {
  const { value, placeholder, onChange, onFocus, onBlur, onKeyDown, ref } = props;

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  }

  return (
    <StyledSearchInput
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={handleInput}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      ref={ref}
      autoComplete="off"
    />
  );
};

const StyledSearchInput = styled.input`
  width: 100%;
  border: none;
  caret-color: #00B1BB;
  outline: none;
`;