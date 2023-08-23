import Image from 'next/image';
import type { IconProps } from './IconProps';

export const Checked = ({ width, height }: IconProps) => (
  <Image
    src="/icons/checked__white.svg"
    alt="Search Icon"
    width={width}
    height={height}
  />
);
