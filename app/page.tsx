'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { useContext } from 'react';
import ProductProvider, { ProductContext } from '@/contexts/ProductContext';
import Product from '@/components/Product';
import SidebarProvider from '@/contexts/SidebarContext';
import CartProvider from '@/contexts/CartContext';
import ProductDetails from './products/[id]/page';

function HomeContent() {
  // get products from product contetx
  const { products }: any = useContext(ProductContext);

  const filteredProducts = products.filter((item: any) => {
    return item.category === 'electronics' || item.category === 'jewelery';
  });
  // console.log(filteredProducts);
  return (
    <div>
      <Header />
      <section className="py-16">
        <Hero />
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
          max-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.map((product: any) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <HomeContent />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  );
}
