import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import AboutHero from 'public/Abouut.jpg'
import Button from "@/components/Button/Button";

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
          <h1 className={styles.title}>sdfsdg</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa vero voluptatem quia perferendis ducimus recusandae commodi 
            rerum assumenda necessitatibus porro, nostrum iste quidem nisi aliquid 
            ut accusamus quod atque voluptas temporibus sunt sed doloremque.
            <br />
            <br /> 
            Accusantium similique esse enim sed, architecto repudiandae voluptatibus cum! 
            Voluptas hic vitae delectus nostrum? Deserunt, repudiandae.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>askdjasşl</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Atque sit tempore eveniet dolor perspiciatis, 
            inventore quis doloremque dolorem, voluptates iure 
            voluptas officia labore molestias ullam qui, 
            repellat tenetur minima nesciunt?
            <br />
            <br /> - sadjfahşfhjhjhd
            <br />
            <br /> - sadjfahşfhjhjhd
            <br /> 
            <br /> - sjdfsdjkghsdjkgh

          </p>
            <Button url="/contact" text="Contact"/>
        </div>

      </div>
    </div>
  )
}

export default About