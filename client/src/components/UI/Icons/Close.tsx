import Image from 'next/image';
import type { IconProps } from './IconProps';

export const Close = ({ width, height }: IconProps) => (
  <Image
    src="/icons/x_black.svg"
    alt="filter Icon"
    width={width}
    height={height}
  />
);
