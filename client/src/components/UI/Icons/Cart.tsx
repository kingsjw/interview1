import Image from 'next/image';
import type { IconProps } from './IconProps';

export const Cart = ({ width, height }: IconProps) => (
  <Image
    src="/icons/cart.svg"
    alt="Search Icon"
    width={width}
    height={height}
  />
);
