import React from 'react';
import Header from 'components/Header';

const DefaultLayout = ({children}) => (
  <div>
    <Header></Header>
    <main className="main">
      {children}
    </main>
  </div>
);

export default DefaultLayout;