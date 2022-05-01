import { FC } from 'react';

import CreatedBy from './CreatedBy';
import Menus from './Menus';
import Person from './Person';

const Sidebar: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`flex flex-col bg-gradient-to-b from-base-100 to-base-300 bg-base-100 py-5 px-5 ${className}`}
    >
      <h1 className="text-4xl font-bold tracking-wider text-left">Booku</h1>
      <div className=" mt-5 w-56 h-full">
        <Menus />
      </div>
      <div>
        <Person />
        <CreatedBy />
      </div>
    </div>
  );
};

export default Sidebar;
