// eslint-disable-next-line no-unused-vars
import React from "react";
import "./polyfills";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { LoginWalletBody } from "./LoginWalletBody";

export const LoginBody = () => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [publicProvider()]
  );
  const projectId = "7bf62edd1d05c43fd61875980cea651d";
  const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        injectedWallet({ chains }),
        rainbowWallet({ projectId, chains }),
        metaMaskWallet({ projectId, chains }),
      ],
    },
    {
      groupName: "Others",
      wallets: [
        coinbaseWallet({ chains, appName: "My RainbowKit App" }),
        walletConnectWallet({ projectId, chains }),
      ],
    },
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
  });
  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} coolMode>
          <LoginWalletBody />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};
