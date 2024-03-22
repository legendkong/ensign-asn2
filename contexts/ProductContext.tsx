'use client';
import { createContext, useState, useEffect } from 'react';

// create context
export const ProductContext = createContext<{ products: any[] }>({
  products: [],
});

const ProductProvider = ({ children }: any) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
