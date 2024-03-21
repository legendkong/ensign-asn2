'use client';
import Image from 'next/image';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { useContext } from 'react';
import ProductProvider, { ProductContext } from '@/contexts/ProductContext';

function HomeContent() {
  // get products from product contetx
  const { products }: any = useContext(ProductContext);

  const filteredProducts = products.filter((item: any) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filteredProducts);
  return (
    <div>
      <Header />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
            {filteredProducts.map((product: any) => {
              return (
                <div
                  className="w-full h-[300px] bg-green-200 mb-4"
                  key={product.id}
                >
                  {product.title}
                </div>
              );
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
    <ProductProvider>
      <HomeContent />
    </ProductProvider>
  );
}
