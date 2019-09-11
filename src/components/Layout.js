import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

export default function({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />

      {children}
    </>
  )
}