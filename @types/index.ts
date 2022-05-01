import { ComponentType } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type Page<P = {}> = NextPage<P> & {
  layout?: ComponentType;
};

export type MyAppProps = AppProps & {
  Component: Page;
};

export type BookType = {
  id: number;
  title: string;
  categoryId: number;
  authors: string[];
  coverUrl: string;
  description: string;
  sections: { title: string; content: string }[];
  audio_length: number;
};

export type CategoryType = {
  id: number;
  name: string;
};
