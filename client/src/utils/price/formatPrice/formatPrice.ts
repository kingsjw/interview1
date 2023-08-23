type Local = 'en-US' | 'ko-KR';

export const formatPrice = (price: number, locale: Local) => {
  return price.toLocaleString(locale);
}