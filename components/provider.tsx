import toast from "react-hot-toast";
import React, { FC, ReactNode, useEffect, useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  GlowWalletAdapter,
  BackpackWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  useWalletModal,
} from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/router";
import { AutoConnectProvider } from "./at";
import { clusterApiUrl } from "@solana/web3.js";
// import { AutoConnectProvider } from './AutoConnextProvider'

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletContextProvider: FC<any> = ({ children }) => {
  // If window exists and is on localhost, choose devnet, else choose mainnet
  //   const network =
  //     typeof window !== "undefined" && process.env.NEXT_PUBLIC_ENV === "dev"
  //       ? (process.env.NEXT_PUBLIC_ALCHEMY as string)
  //       : (process.env.NEXT_PUBLIC_ALCHEMY as string);
  const network = process.env.NEXT_PUBLIC_ALCHEMY;
  // console.log(network);
  const endpoint = useMemo(() => network, [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SlopeWalletAdapter(),
      new GlowWalletAdapter(),
      new BackpackWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      // new SolletWalletAdapter(),
      // new SolletExtensionWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint!}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <WalletContextProvider>{children}</WalletContextProvider>;
};
