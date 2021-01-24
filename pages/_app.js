import { SWRConfig } from "swr";
import Fetcher from "../lib/fetch";

import Container from "../components/Container";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <SWRConfig value={{ fetcher: Fetcher }}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SWRConfig>
  );
};

export default App;
