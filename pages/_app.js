import { Provider } from 'react-redux';
import DefaultLayout from '../layouts/DefaultLayout';
import { useStore } from 'redux/store'
import 'assets/scss/main.scss';

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