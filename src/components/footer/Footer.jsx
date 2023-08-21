import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { img: '/facebook.png', link: 'https://www.facebook.com/SiemensTurkiye' },
  { img: '/twitterr.png', link: 'https://twitter.com/siemensturkiye' },
  { img: '/instagram.png', link: 'https://www.instagram.com/siemensturkiye/' },
  { img: '/linkedin.png', link: 'https://www.linkedin.com/company/siemens' },
  { img: '/youtube.png', link: 'https://www.youtube.com/user/Siemens' },
];

const Footer = () => {
  return (
    <div className={styles.container}> 
        <div>© Siemens 1996 - 2023</div>
        <div className={styles.social}>
          {socialLinks.map((social, index)=>(
            <Link href={social.link} key={index}>
              <Image src={social.img} width={20} height={20} alt={social.link} className={styles.icon}></Image>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Footer