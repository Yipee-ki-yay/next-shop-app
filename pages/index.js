import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeStore } from 'redux/store';

// ----- Actions -----
import { incrementCount } from 'redux/actions/counterActions';
import { fetchManagers } from 'redux/actions/managersActions';

// ----- Components -----
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const dispatch = useDispatch();

  // ----- Local State -----

  // ----- Methods -----

  // ----- API Methods -----

  // ----- Component Did Mount -----
  useEffect(() => {
    dispatch(incrementCount())
    // dispatch(fetchManagers())
  }, []);

  return (
    <div className="container">
      <Head>
        <meta name="description" content="Buy beautiful, high quality carpets for your home."/>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Link href="/products">
        <a>Products</a>
      </Link>
    </div>
  )
}

// ----- SSR -----
Home.getInitialProps = async () => {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore

  await dispatch(incrementCount())
  await dispatch(fetchManagers({ getParams: { page: 0, size: 10 } }))

  return { 
    initialReduxState: reduxStore.getState() 
  }
}