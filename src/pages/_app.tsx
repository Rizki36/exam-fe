import { Provider } from 'react-redux';

import store from '@/configs/redux/store';
import BaseTemplate from '@/templates/BaseTemplate';
import { MyAppProps } from '@types';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const Layout = Component.layout ?? BaseTemplate;

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default MyApp;
