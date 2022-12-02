import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Web3 from 'web3'
import { Web3ReactProvider } from '@web3-react/core';
import { MetaMaskProvider } from './hooks/metamask';


function getLibrary(provider, connector) {
  return new Web3(provider)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </Web3ReactProvider>
  </React.StrictMode>
);


