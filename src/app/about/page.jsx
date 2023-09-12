import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import AboutHero from 'public/Abouut.jpg'
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About of Siemens HMI",
  description: "This is About Page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} 
          src={AboutHero}
          fill= {true}
          alt='hmi'
        />
        <div className={styles.imgText}>
          <h2 className={styles.imgDesc}>Siemens HMI</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>What is Siemens HMI ?</h1>
          <p className={styles.desc}>
            Siemens HMI (Human Machine Interface) is an interface technology 
            for humans to control and monitor industrial automation systems.
            Siemens HMI products are used to monitor, control and manage industrial processes.
            <br />
            <br /> 
            Our devices are used to increase productivity, reduce production 
            costs and make operations more efficient.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Key Features</h1>
          <p className={styles.desc}>Siemens HMI devices can be used to control 
            industrial automation systems. This allows you to automate and 
            manage production processes.
            Siemens HMIs can be integrated with industrial automation systems and 
            communicate with different devices. This facilitates data sharing and collaboration.
            <br />
            <br /> - Industrial Compatibility
            <br />
            <br /> - Data Monitoring and Analysis
            <br /> 
            <br /> - Graphical Interface
          </p>
            <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}
export default About
