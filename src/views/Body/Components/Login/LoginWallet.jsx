import { ConnectButton } from '@rainbow-me/rainbowkit';


export const LoginWallet = () => {
  return <ConnectButton
    label="Connect your wallet"
    accountStatus={{
      smallScreen: false,
      largeScreen: 'address',
    }}
    showBalance={true}
    chainStatus={{
      smallScreen: 'icon',
      largeScreen: 'full',
    }}
  />;
};
