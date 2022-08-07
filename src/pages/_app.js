import "../styles/globals.css";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import Script from 'next/script';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
     <>
            <Script id="gtag" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script strategy="lazyOnload" id="gtag-load">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            
            
            <Head>
              <title>Techofic</title>
              <meta name="description" content="Techofic is a software agency, We offer our customers to Software Development services." />
              <link rel="icon" href="/favicon.ico" />
          </Head>
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>

            
        </>
  );
}

export default wrapper.withRedux(MyApp);
