import { ethers } from 'ethers'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [address, setAddress] = useState("")
  const handleWalletConnect = async () => {
    // write some code to connect to the users wallet
    // display their address by using the setAddress function 
    // from useSate above
    // refer to the ethers docs for help!
    // https://docs.ethers.io/v5/
    console.log('time to connect')
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
