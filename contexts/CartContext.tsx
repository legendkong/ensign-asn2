'use client';
import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem: any) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem: any) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // adding to cart
  const addToCart = (product: any, id: any) => {
    const newItem = { ...product, amount: 1 };
    // check if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    // console.log(cart);
    // console.log(cartItem);
    // console.log(product);
    // console.log(`${product.title} was added to cart`);
  };

  // removing from cart
  const removeFromCart = (id: any) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id: any) => {
    const cartItem = cart.find((item: any) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id: any) => {
    const cartItem: any = cart.find((item: any) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart: any = cart.map((item: any) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
