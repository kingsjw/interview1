import Image from 'next/image';
import type { IconProps } from './IconProps';

export const ChevronUp = ({ width, height }: IconProps) => (
  <Image
    src="/icons/chevron_up.svg"
    alt="Search Icon"
    width={width}
    height={height}
  />
);
