import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { LanguageProvider } from './components/Lang/LanguageProvider'
import { PrimeReactProvider } from '@primereact/core';

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/firebase-messaging-sw.js")
//     .then(() => {
//       console.log("Service Worker registered");
//     })
//     .catch(console.error);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </PrimeReactProvider>

  </React.StrictMode>
);
