import { SWRConfig } from "swr";
import fetch from "../lib/fetch";

import Container from "../components/Container";
import "../styles/global.css";

export default ({ Component, pageProps }) => (
  <SWRConfig value={{ fetcher: fetch }}>
    <Container>
      <Component {...pageProps} />
    </Container>
  </SWRConfig>
);
