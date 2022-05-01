import { FC } from 'react';

const CreatedBy: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`mt-5 w-full text-center text-base-content/75 ${className}`}
    >
      Created with 💖 by Fitra
    </div>
  );
};

export default CreatedBy;
