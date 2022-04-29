import BaseTemplate from '@/templates/BaseTemplate';
import { MyAppProps } from '@types';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const Layout = Component.layout ?? BaseTemplate;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
