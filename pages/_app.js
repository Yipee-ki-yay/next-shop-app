// import React from 'react';
// import { Provider } from 'react-redux';
// import { createWrapper } from 'next-redux-wrapper';
import DefaultLayout from '../layouts/DefaultLayout';
// import store from 'redux/store'
import { wrapper } from 'redux/store'


const App = ({ Component, pageProps }) => {
  return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
  )
}

export async function getServerSideProps(context) {
  console.log('_app getServerSideProps log');
  
  return {
    props: {}, // will be passed to the page component as props
  }
}

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);

