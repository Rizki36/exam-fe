import { FC } from 'react';

const Decoration2: FC<{ className?: string }> = ({ className = '-top-5' }) => {
  return (
    <div
      className={`absolute -z-10 w-14 h-14 opacity-60 blur-lg ${className}`}
      style={{
        background: 'linear-gradient(to right, #89216B, #DA4453)',
      }}
    />
  );
};

export default Decoration2;
