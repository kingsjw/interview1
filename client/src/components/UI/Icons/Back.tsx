import Image from 'next/image';
import type { IconProps } from './IconProps';

export const Back = ({ width, height }: IconProps) => (
  <Image
    src="/icons/back.svg"
    alt="Search Icon"
    width={width}
    height={height}
  />
);
