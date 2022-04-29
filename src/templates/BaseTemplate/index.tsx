import { FC } from 'react';

import Sidebar from './Sidebar';

const BaseTemplate: FC = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="overflow-y-auto w-full h-screen">{children}</div>
    </div>
  );
};

export default BaseTemplate;
