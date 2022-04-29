import * as React from 'react';
import { FC } from 'react';

import Navbar from './Navbar';

const BaseTemplate: FC = ({ children }) => {
  return (
    <>
      <Navbar className="fixed z-50" />
      <div className="flex flex-col">{children}</div>
    </>
  );
};
export default BaseTemplate;
