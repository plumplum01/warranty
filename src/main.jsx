import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/warranty"> {/* basename 설정 추가 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);