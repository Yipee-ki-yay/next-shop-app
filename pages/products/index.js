import React from 'react';
import Link from 'next/link';

const Products = () => {
  return (
    <div>
      Products
      <Link href="/">
        <a>main</a>
      </Link>

    </div>
  );
};

export async function getServerSideProps(context) {
  console.log('products getServerSideProps log');
  
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Products;
