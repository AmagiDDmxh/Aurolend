import { InjectedConnector, chain } from 'wagmi'

export const mainNetConfig = {
  name: 'Aurora MainNet',
  chain: 'NEAR',
  rpcUrls: ['https://mainnet.aurora.dev'],
  faucets: [],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'aETH',
    decimals: 18,
  } as const,
  infoURL: 'https://aurora.dev',
  shortName: 'aurora',
  id: 1313161554,
  blockExplorers: [
    {
      name: 'explorer.aurora.dev',
      url: 'https://explorer.mainnet.aurora.dev',
      standard: 'EIP3091',
    },
  ],
  testnet: false,
}

export const testNetConfig = {
  name: 'Aurora TestNet',
  chain: 'NEAR',
  rpcUrls: ['https://testnet.aurora.dev/'],
  faucets: [],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'aETH',
    decimals: 18,
  } as const,
  infoURL: 'https://aurora.dev',
  shortName: 'aurora-testnet',
  id: 1313161555,
  blockExplorers: [
    {
      name: 'explorer.aurora.dev',
      url: 'https://explorer.testnet.aurora.dev',
      standard: 'EIP3091',
    },
  ],
  testnet: true,
}

const chains = [mainNetConfig, testNetConfig]

export const connectors = () => {
  return [
    new InjectedConnector({
      chains,
    }),
  ]
}
