import 'react-virtualized/styles.css';

import { Global } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from 'src/styles';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Global styles={GlobalStyles} />
    <App />
  </>,
);
