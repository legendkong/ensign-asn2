import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';

export default function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-[#CEFA05]">
      <div>
        <div>Header</div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
        </div>
      </div>
    </header>
  );
}
