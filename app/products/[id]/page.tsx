'use client';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetails = () => {
  // get the product id from the url
  const { id }: any = useParams();
  let [products, setProducts] = useState(null);

  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, [id]);

  console.log(products);

  // if product is not found
  if (!products) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  // destructure product
  const { title, price, description, image } = products;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <Image
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt=""
              width={400}
              height={400}
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <p className="mb-8">
              <Link href="/">
                <button className="hover:bg-blue-200 text-black text-xl font-semibold border-2 py-4 px-4 rounded-xl">
                  Back
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
