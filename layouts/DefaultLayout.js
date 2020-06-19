import React from 'react';

// ----- Components -----
import Header from 'components/Header/Header';
import Footer from 'components/Footer';

const DefaultLayout = ({children}) => (
  <>
    <Header></Header>
    <main className="main">
      {children}
    </main>
    <Footer></Footer>
  </>
);

export default DefaultLayout;