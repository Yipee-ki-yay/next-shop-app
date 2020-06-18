// import React from 'react';
import { Provider } from 'react-redux';
// import { createWrapper } from 'next-redux-wrapper';
import DefaultLayout from '../layouts/DefaultLayout';
// import store from 'redux/store'
// import { wrapper } from 'redux/store'
import { useStore } from 'redux/store'


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  )
}

// export async function getServerSideProps(context) {
//   console.log('_app getServerSideProps log');
  
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);

// export default wrapper.withRedux(App);

