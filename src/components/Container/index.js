import React from 'react';
import Container from './styled';

export default function({ className, children }) {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}