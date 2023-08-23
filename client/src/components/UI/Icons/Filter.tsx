import Image from 'next/image';
import type { IconProps } from './IconProps';

export const Filter = ({ width, height }: IconProps) => (
  <Image
    src="/icons/filter.svg"
    alt="filter Icon"
    width={width}
    height={height}
  />
);
