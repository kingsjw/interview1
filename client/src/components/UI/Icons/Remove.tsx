import Image from 'next/image';
import type { IconProps } from './IconProps';

export const Remove = ({ width, height }: IconProps) => (
  <Image
    src="/icons/x.svg"
    alt="Remove Icon"
    width={width}
    height={height}
  />
);
