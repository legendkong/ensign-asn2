'use client';
import { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '@/contexts/SidebarContext';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '@/contexts/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen }: any = useContext(SidebarContext);
  const { itemAmount }: any = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? 'bg-blue-200 py-4 shadow-md' : 'bg-white py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link href={`/`}>
          <div>
            <Image src="/logo.png" alt="" width={140} height={100}></Image>
          </div>
        </Link>
        <div className="flex items-center">
          {/* cta */}
          <Link href={`https://www.ensigninfosecurity.com/`} target="_blank">
            <button className="bg-yellow-200 mr-10 hover:bg-blue-700 hover:text-white border-solid border-2 border-blue-500 text-black font-semibold py-2 px-8 rounded-3xl">
              Get In Touch
            </button>
          </Link>
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <FaShoppingCart className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
