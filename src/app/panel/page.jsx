import React from 'react'
import styles from './page.module.css'

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
      
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Panel