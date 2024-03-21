import { useContext } from 'react';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

export default function Product({ product }: any) {
  console.log(product);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border rounded-xl border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <Image
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt="product"
              height={120}
              width={120}
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 bg-green-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <button>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-[#CEFA05]">
                <BsPlus className="text-3xl text-black" />
              </div>
            </button>
            <Link
              href={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* category, title, price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link href={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
}
