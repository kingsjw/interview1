import Image from 'next/image';
import type { IconProps } from './IconProps';

export const ChevronDown = ({ width, height }: IconProps) => (
  <Image
    src="/icons/chevron_down.svg"
    alt="Search Icon"
    width={width}
    height={height}
  />
);
