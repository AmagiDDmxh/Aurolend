import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as WAGMIProvider } from 'wagmi'
import { providers } from 'ethers'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { connectors } from 'utils/connectors'

// eslint-disable-next-line semi
const providerUrl = import.meta.env.PROD ? 'https://mainnet.aurora.dev' : 'https://testnet.aurora.dev'
const provider = () => new providers.JsonRpcProvider(providerUrl)

ReactDOM.render(
  <WAGMIProvider connectors={connectors} provider={provider} autoConnect>
    <App />
  </WAGMIProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
