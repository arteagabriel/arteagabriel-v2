import React from 'react';
import GlobalStyle from './GlobalStyle';

export default function({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}