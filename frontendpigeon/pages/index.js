import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import CreateVault from "../components/CreateVaultAndTask";
import { useMoralis } from "react-moralis";

const supportedChains = ["80001", "31337"]; // Mumbai testnet and Hardhat Network blockchain ID

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CreateVault /> {/* Tag must be UpperCase, CreateVault */}
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row">
            </div>
          ) : (
            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div>Please connect to a Wallet</div>
      )}
    </div>
  );
}