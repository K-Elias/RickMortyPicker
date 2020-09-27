import { CSSProperties } from 'react';

export const layout: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  minWidth: '100vh'
};

export const box: CSSProperties = {
  padding: '.5rem'
};

export const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  background: 'white',
  borderBottom: '1px solid black',
  padding: '.5rem',
  position: 'sticky',
  top: 0
};
