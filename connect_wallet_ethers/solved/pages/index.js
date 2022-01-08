import { ethers } from 'ethers'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [address, setAddress] = useState("")
  const handleWalletConnect = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
    } else {
      alert('No Wallet Detected')
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.header}> Connect Your Wallet to View Your Address </h1>
      <div className={styles.buttonContainer}>
      <div className={styles.buttonBackground}>
      </div>
      <button className={styles.button} onClick={() => handleWalletConnect()}>Connect Wallet</button>
      </div>
      {
        address && (<p className={styles.addressLine}> Your address is {address}</p>)
      }
      </div>
  )
}
