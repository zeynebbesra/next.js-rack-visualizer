import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import mtp from 'public/MTP2200.jpeg'
import greenButton from 'public/greenButton.png'
import redButton from 'public/redButton.png'

async function getData() {
  const res = await fetch ("http://localhost:3000/api/panels", {
    cache: "no-store",
  })

  if (!res.ok){
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const Panel = async() => {
  const data = await getData()
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.title}>MTP2200</h2>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={mtp}
            width={150}
            height={150}
            alt=""
          />
          <div className={styles.desc}>
            <p className={styles.imgVersion}>imgVersion: V20.00.00.00</p>
            <p className={styles.corebootVersion}>corebootVersion: V09.00.00.00</p>
            <div className={styles.ipContainer}>
              <p className={styles.soc}>Soc1 IP: 10.10.10.10</p>
              <p className={styles.gigabit}>Gigabit IP: 10.10.10.10</p>
            </div>
          </div>
        </div>
        <div className={styles.boolean}>
          <div className={styles.relayItem}>
            <p className={styles.relay}>Relay 1</p>
            <Image src={redButton} className={styles.button} />
          </div>

          <div className={styles.relayItem}>
            <p className={styles.relay}>Relay 2</p>
            <Image src={greenButton} className={styles.button} />
          </div>

          <div className={styles.relayItem}>
            <p className={styles.relay}>HWT Ready</p>
            <Image src={greenButton} className={styles.button} />
          </div>
        </div>
        <p className={styles.serialInt}>Serial Interface: /dev/ttyUSB0</p>
      </div>
    </div>
  )
}

export default Panel