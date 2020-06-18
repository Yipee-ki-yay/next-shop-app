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
    <div>
      <Head>
        <meta name="description" content="Buy beautiful, high quality carpets for your home."/>
        <title>Products</title>
      </Head>

      Products
      <Link href="/">
        <a>main</a>
      </Link>
    </div>
  );
};

// ----- SSR -----
export async function getServerSideProps(context) {
  console.log('products getServerSideProps log');
  
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Products;
