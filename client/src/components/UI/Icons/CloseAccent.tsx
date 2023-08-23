import Image from 'next/image';
import type { IconProps } from './IconProps';

export const CloseAccent = ({ width, height }: IconProps) => (
  <Image
    src="/icons/x_accent.svg"
    alt="filter Icon"
    width={width}
    height={height}
  />
);
