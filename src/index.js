import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
// import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
