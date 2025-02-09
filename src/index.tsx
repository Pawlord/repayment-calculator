import React from 'react';
import ReactDOM from 'react-dom/client';

// Компоненты
import { App } from './Pages';

// Стили
import './normalize.css';
import './global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
