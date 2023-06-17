import { ConnectButton } from '@rainbow-me/rainbowkit';


export const LoginWalletBody = () => {
  return <ConnectButton
    label="Connect your wallet"
    accountStatus="address"
    showBalance={true}
    chainStatus="none"
  />;
};
