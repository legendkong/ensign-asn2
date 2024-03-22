import { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '@/contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
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
        isActive ? 'bg-white py-4 shadow-md' : 'bg-[#CEFA05] py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link href={`/`}>
          <div>
            <Image src="/logo.png" alt="" width={100} height={100}></Image>
          </div>
        </Link>
        {/* cart */}

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}
