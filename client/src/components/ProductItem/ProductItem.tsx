import type { SyntheticEvent, ReactElement } from 'react';
import type { Product } from '@api';
import styled from '@emotion/styled';
import { formatPrice, getDiscountPercent } from '@utils';

type ProductItemProps = {
  product: Product;
  cartControllCompoent?: (id: number) => ReactElement;
};

export const ProductItem = (props: ProductItemProps) => {
  const { product, cartControllCompoent } = props;
  const { id, name, listPrice, netPrice, imageUrl } = product;
  const formattedListPrice = `${formatPrice(listPrice, 'ko-KR')}원`;
  const formattedNetPrice = `${formatPrice(netPrice, 'ko-KR')}원`;
  const discountPercent = getDiscountPercent(listPrice, netPrice);
  const formattedDiscountPercent = `${getDiscountPercent(listPrice, netPrice)}%`;
  const isDiscounted = Boolean(discountPercent);

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const imageElement = event.currentTarget;

    imageElement.src = "https://firebasestorage.googleapis.com/v0/b/kingsjw7-8d984.appspot.com/o/common%2Fno-image.jpeg?alt=media&token=8986b7c8-8fd0-4cab-990f-801dabb9a8fd";
  };

  return (
    <Item>
      <ImageContainer>
        <Image
          src={imageUrl}
          alt={`${name}-상품 이미지`}
          loading="lazy"
          decoding="async"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          onError={handleImageError}
        />
        {cartControllCompoent?.(id)}
      </ImageContainer>
      <Title>{name}</Title>
      <div>
        {isDiscounted && (
          <NetPrice>
            <span>{formattedNetPrice}</span>
          </NetPrice>
        )}
        <DiscountContainer>
          {isDiscounted && (
            <DiscountPercent>{formattedDiscountPercent}</DiscountPercent>
          )}
          <ListPrice>{formattedListPrice}</ListPrice>
        </DiscountContainer>
      </div>
    </Item>
  );
};

const Item = styled.div`
  background-color: #fff;
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 152px;
  background-color: #f5f5f5;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 1;
`;

const Title = styled.div`
  font-size: 12px;
  color: #292929;
  margin-top: 8px;
`;

const NetPrice = styled.div`
  margin-top: 4px;
  span {
    font-size: 12px;
    color: #292929;
    text-decoration: line-through;
  }
`;

const DiscountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DiscountPercent = styled.span`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  color: #FF5630;
  margin-right: 4px;
`;

const ListPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`;
