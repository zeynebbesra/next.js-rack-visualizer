import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero2.webp'
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <div className={styles.desc}>
          <p>
              We are a technology company focused on industry, infrastructure, transportation and healthcare.
          </p>
          <p>
              From more resource-efficient factories and resilient supply chains to smarter buildings and convenient 
              transportation to improved healthcare, we create technology to deliver real value to our customers.
          </p>
          <p>
              By connecting the real and digital worlds, we empower our customers to transform their industries and markets, 
              helping them transform everyday life for billions of people.
          </p>
          <Button url="/about" text="See our works"/>
        </div>  
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='siemens' className={styles.img}></Image>
      </div>

    </div>
    
  )
}
