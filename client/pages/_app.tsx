import './globals.css';
import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from '@context';

const inter = Inter({ subsets: ['latin'] });
 
const queryClient = new QueryClient();

export const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Market Place</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Component className={inter.className} {...pageProps} />
        </CartProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
