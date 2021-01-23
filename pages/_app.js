import Head from 'next/head';

import { SWRConfig } from 'swr';
import fetch from '../lib/fetch';
import { DefaultSeo } from 'next-seo';
//import SEO from '../next-seo.config';

import Container from '../components/Container';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <SWRConfig value={{ fetcher: fetch }}>
        <Container>
          {/* <DefaultSeo {...SEO} /> */}
          <Component {...pageProps} />
        </Container>
      </SWRConfig>
    </>
  );
};

export default App;
