import { ConnectButton } from '@rainbow-me/rainbowkit';


export const LoginWallet = () => {
  return <ConnectButton
    label="Connect your wallet"
    accountStatus="address"
    showBalance={true}
  />;
};
