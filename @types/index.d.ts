import { ComponentType } from 'react';

import { NextPage } from 'next';

export type Page<P = {}> = NextPage<P> & {
  layout?: ComponentType;
};

export type MyAppProps = AppProps & {
  Component: Page;
};
