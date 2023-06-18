import { ConnectButton } from '@rainbow-me/rainbowkit';


export const LoginWallet = () => {
  return <ConnectButton
    label="Connect your wallet"
    accountStatus={{
      largeScreen: false,
      smallScreen: 'address',
    }}
    showBalance={true}
    chainStatus={{
      smallScreen: 'full',
      largeScreen: 'icon',
    }}
  />;
};
