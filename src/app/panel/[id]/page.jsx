import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'
import greenButton from 'public/greenButton.png'
import redButton from 'public/redButton.png'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/panels/${id}`, {
    cache: "no-store",
  })
  if(!res.ok) {
    return notFound()
  }
  return res.json()
}

export async function generateMetadata({ params }) {

  const panel = await getData(params.id)
  return {
    title: panel.panelType,
  };
}


const PanelPost = async({params}) => {
  const data = await getData(params.id)
   
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.title}>{data.panelType}</h2> 
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src= {data.img}
            width={150}
            height={150}
            alt=""
          />
          <div className={styles.desc}>
            <p className={styles.imgVersion}>imgVersion: {data.imageVersion}</p> 
            <p className={styles.corebootVersion}>corebootVersion: {data.corebootVersion}</p> 
            <div className={styles.ipContainer}>
              <p className={styles.soc}>Soc1 IP: {data.soc1IP}</p> 
              <p className={styles.gigabit}>Gigabit IP: {data.gigabitIP}</p> 
            </div>
          </div>
        </div>
        <div className={styles.boolean}>
          <div className={styles.relayItem}>
            <p className={styles.relay}>Relay 1</p>
            <Image src={redButton} className={styles.button} alt="" />
          </div>

          <div className={styles.relayItem}>
            <p className={styles.relay}>Relay 2</p>
            <Image src={greenButton} className={styles.button} alt=""/>
          </div>

          <div className={styles.relayItem}>
            <p className={styles.relay}>HWT Ready</p>
            <Image src={greenButton} className={styles.button} alt=""/>
          </div>
        </div>
        <p className={styles.serialInt}>Serial Interface: {data.serialInterface}</p>
      </div>
    </div>  
  )
}

export default PanelPost 