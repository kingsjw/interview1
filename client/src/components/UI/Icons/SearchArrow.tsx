import Image from 'next/image';
import type { IconProps } from './IconProps';

export const SearchArrow = ({ width, height }: IconProps) => (
  <Image
    src="/icons/searchArrow.svg"
    alt="Search Arrow Icon"
    width={width}
    height={height}
  />
);
