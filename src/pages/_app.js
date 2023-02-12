import '../styles/main.css';

function MyApp({ Component, pageProps }) {
    return  <SafeHydrate><Component {...pageProps} /></SafeHydrate>
}

export default MyApp;
