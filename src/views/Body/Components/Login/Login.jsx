import React from 'react';
import './polyfills';
import '@rainbow-me/rainbowkit/styles.css';
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  walletConnectWallet,
  argentWallet,
  metaMaskWallet,
  coinbaseWallet
} from '@rainbow-me/rainbowkit/wallets';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { LoginWallet } from './LoginWallet';

export const Login = () => {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );

  const connectors = connectorsForWallets([
    {
      groupName: 'Recommended',
      wallets: [
        walletConnectWallet({ chains }),
        metaMaskWallet({ chains }),
      ],
    },
    {
      groupName: 'Others',
      wallets: [
        rainbowWallet({ chains }),
        coinbaseWallet({ chains }),
        argentWallet({ chains }),

      ],
    },
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  });

  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          showRecentTransactions={true}
          chains={chains}
        >
          <LoginWallet />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};
