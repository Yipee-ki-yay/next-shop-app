import { useEffect } from 'react';
// ----- Actions -----

// ----- Components -----
import Head from 'next/head';
import Link from 'next/link';

const Products = () => {
  // ----- Local State -----

  // ----- Methods -----

  // ----- API Methods -----

  // ----- Component Did Mount -----
  useEffect(() => {
    console.log('products mounted');
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Buy beautiful, high quality carpets for your home."/>
        <title>Products</title>
      </Head>

      <h1>Products</h1>
      
      <Link href="/">
        <a>main</a>
      </Link>
    </>
  );
};

// ----- SSR -----
Products.getInitialProps = async () => {
  console.log('products getInitialProps log');
  
  return {}
}

export default Products;
