"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import { signOut, useSession } from "next-auth/react";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About",
        url: "/about"

    },
    {
        id:2,
        title: "Panel",
        url: "/panel"
    },
    {
        id: 3,
        title: "Dashboard",
        url: "/dashboard"
    },
    {
        id:4,
        title: "Contact",
        url: "/contact"
    }

]

const Navbar = () => {
    const session = useSession();
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>SIEMENS</Link>
        <div className={styles.links}>
            {links.map((link, index)=> (
                <Link key={index} href={link.url}>
                    {link.title}
                </Link>
            ))}
            {session.status === "authenticated" && (
                <button className={styles.logout} onClick={signOut}>
                    Logout
                </button>
            )}
        </div>
    </div>
  )
}

export default Navbar