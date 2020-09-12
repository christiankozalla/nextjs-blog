import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

import { SWRConfig } from 'swr';
import fetch from '../lib/fetch';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import Container from '../components/Container';
import '../styles/global.css';

export default ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <SWRConfig value={{ fetcher: fetch }}>
      <Container>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Container>
    </SWRConfig>
  );
};
