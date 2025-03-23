import { Popcorn } from 'lucide-react';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className=" bg-header h-[56px] flex items-center shadow-2xl px-4">
      <NavLink to="/">
        <Popcorn className=" stroke-red-500 " />
      </NavLink>
    </header>
  );
}
