import Container from '../components/Container'
import '../styles/global.css'

export default ({ Component, pageProps }) => (
    <Container>
        <Component {...pageProps} />
    </Container>

);
