import { useContext, createContext, useState, useMemo } from 'react';
import type { ReactElement } from 'react';

type CartContextType = {
  cartProducts: (string | number)[];
  addCartProduct: (_: string | number) => void,
  removeCartProduct: (_: string | number) => void,
};

const CartContext = createContext<CartContextType>({
  cartProducts: [],
  addCartProduct: (_: string | number) => {},
  removeCartProduct: (_: string | number) => {},
});

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('CartContext가 초기화 되지 않았습니다.');
  }

  return context;
};

type CartProductsProps = {
  children: ReactElement;
}

const setItem = (cartProducts: (string | number)[]) => localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

export const CartProvider = ({ children }: CartProductsProps) => {
  const storageCartProducts = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartProducts') ?? '[]') : [];
  const [cartProducts, setcartProducts] = useState<(string | number)[]>(storageCartProducts);

  const addCartProduct = (id: number | string) => {
    setcartProducts((prev) => {
      const value = [...prev, id];

      setItem(value);

      return value;
    });

    setItem([...cartProducts, id]);
  };

  const removeCartProduct = (id: number | string) => {
    setcartProducts((prev) => {
      const value = prev.filter(productId => productId !== id)

      setItem(value);

      return value;
    });
  };

  const contextValue = useMemo(() => ({
    cartProducts,
    addCartProduct,
    removeCartProduct,
  }), [
    cartProducts,
    addCartProduct,
    removeCartProduct,
  ]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};