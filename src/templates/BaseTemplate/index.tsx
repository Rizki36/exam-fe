import * as React from 'react';
import { FC } from 'react';

const ClientTemplate: FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">{children}</div>
    </>
  );
};
export default ClientTemplate;
