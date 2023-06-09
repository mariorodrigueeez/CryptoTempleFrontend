// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const LoginWallet = () => {
  return (
    <div >

      <ConnectButton
        showBalance={{
          smallScreen: true,
          largeScreen: true,
        }} />
    </div>
  )
}
