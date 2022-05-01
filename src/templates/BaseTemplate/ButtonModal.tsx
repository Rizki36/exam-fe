import { Dispatch, FC, SetStateAction } from 'react';

const ButtonModal: FC<{
  className?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ className, isOpen, setIsOpen }) => {
  return (
    <label
      className={`btn btn-md btn-circle swap swap-rotate ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className={`fill-current ${!isOpen ? 'swap-off' : 'swap-on'}`}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      <svg
        className={`fill-current ${isOpen ? 'swap-off' : 'swap-on'}`}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  );
};

export default ButtonModal;
