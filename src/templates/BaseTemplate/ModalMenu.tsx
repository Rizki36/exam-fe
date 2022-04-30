import { Dispatch, FC, SetStateAction } from 'react';

import ButtonModal from './ButtonModal';
import CreatedBy from './CreatedBy';
import Menus from './Menus';
import Person from './Person';

const ModalMenu: FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex fixed inset-0 z-20 justify-center items-center bg-white/20 backdrop-blur lg:hidden">
      <div className="flex flex-col justify-center items-center py-8 px-5 mx-1 w-full h-fit rounded-lg bg-base-200">
        <div className="flex justify-between items-center mb-5 w-full">
          <h2 className="text-2xl">Menu</h2>
          <ButtonModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            className="btn-sm"
          />
        </div>
        <Menus className="w-full" />
        <Person className="mt-5 rounded-xl" />
        <CreatedBy />
      </div>
    </div>
  );
};

export default ModalMenu;
