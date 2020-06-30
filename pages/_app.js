import Container from "../components/Container";
import "../styles/global.css";
import "../utils/prism.css";

export default ({ Component, pageProps }) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);
