import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@/configs/redux/store';
import BaseTemplate from '@/templates/BaseTemplate';
import { MyAppProps } from '@types';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const Layout = Component.layout ?? BaseTemplate;

  return (
    <>
      <Provider store={store}>
        {/* @ts-ignore */}
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
