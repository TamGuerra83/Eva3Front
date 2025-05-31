import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const Root = () => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const appProps = useMemo(() => ({ mode, toggleColorMode }), [mode]);

  return (
    <BrowserRouter>
      <App {...appProps} />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
