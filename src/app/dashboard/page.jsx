"use client";
import React from 'react'
import Image from 'next/image'; 
import styles from './page.module.css'
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Dashboard = () => {

  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const {data, mutate, error, isLoading} = useSWR(
  //   "/api/panels",
  //   fetcher)
  
  const { data: panelData, mutate: mutatePanel, error: panelError, isLoading: panelIsLoading } = useSWR(
    "/api/panels",
    fetcher)
    
    
  // const { data: rackData, mutate: mutateRack, error: rackError, isLoading: rackIsLoading } = useSWR(
  //   "/api/racks",
  //   fetcher)
    

  if (session?.status === "loading"){
    return <p>Loading...</p>
  }

  if (panelError) {
    console.error("Error fetching data:", panelError);
    return <p>Error loading data</p>;
  }

  if (session?.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const panelType = e.target[0].value
    const corebootVersion = e.target[1].value
    const imageVersion = e.target[2].value
    const soc1IP = e.target[3].value
    const gigabitIP = e.target[4].value
    const serialInterface = e.target[5].value
    const img = e.target[6].value

    try {
      await fetch("/api/panels",{
        method: "POST",
        body: JSON.stringify({
          panelType,
          corebootVersion,
          img,
          imageVersion,
          soc1IP,
          gigabitIP,
          serialInterface,
        }),
      })
      await mutatePanel()
      e.target.reset()
    } catch (err) {
      console.log(err)
    }
  
  }

  const handleDelete = async(id) => {
    try {
      await fetch(`/api/panels/${id}`,{
        method: "DELETE",
      })
      mutatePanel()
      
    } catch (err) {
      console.log(err)
    }
  }

  if (session?.status === "authenticated"){
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {panelIsLoading
            ? "Loading..."
            : panelData.map((panel) => (
            <div className={styles.post} key={panel._id}>
              <div className={styles.imgContainer}>
                <Image src={panel.img} alt='' width={200} height={100}/>
              </div>
              <h2 className={styles.postTitle}>{panel.panelType}</h2>
              <span className={styles.delete}
                onClick={()=> handleDelete(panel._id)}
                >X</span>
            </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Panel</h1>
          <input type="text" placeholder='Panel Type' className={styles.input}/>
          <input type="text" placeholder='Coreboot Version' className={styles.input}/>
          <input type="text" placeholder='Image Version' className={styles.input}/>
          <input type="text" placeholder='Soc1 IP' className={styles.input}/>
          <input type="text" placeholder='Gİgabit IP' className={styles.input}/>
          <input type="text" placeholder='Serial Interface' className={styles.input}/>
          <input type="text" placeholder="Image" className={styles.input} />
          {/* <input type="text" placeholder='Rack' className={styles.input}/> */}
          {/* <select id="devices" name="devices" className={styles.input}>
            {rackIsLoading
              ? "Loading..."
              : rackData.map((rack) => (
              <option value="device" key={rack._id}>{rack.deviceIP}</option>
            ))}
          </select> */}
          <button className={styles.button}>Send</button>
        </form>
      </div>
    )  
  }
}

export default Dashboard


// "use client"

// import React from 'react';
// import Image from 'next/image';  
// import styles from './page.module.css';
// import useSWR from "swr";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation"; 

// const Dashboard = () => {

//   const session = useSession()
//   const router = useRouter();

//   console.log(session);

//   const fetcher = (...args) => fetch(...args).then((res) => res.json());

//   const { data, error, isLoading } = useSWR(
//    `/api/panels?panelType=${session.data?.user?.name}`, 
//     fetcher
//   );

//   console.log("DATA:",data)

  

//   if (!session) {
//     return <p>Loading...</p>;
//   }

//   if (!session.user) { // session.user kontrolü ekledim.
//     router.push("/dashboard/login");
//     return null; // Dönen bir şey yoksa, null döndürün.
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.posts}>
//         {data
//           ? data.map((post) => (
//               <div className={styles.post} key={post._id}>
//                 <div className={styles.imgContainer}>
//                   <Image src={post.img} alt="" width={200} height={100} />
//                 </div>
//                 <h2 className={styles.postTitle}>{post.title}</h2>
//                 <span
//                   className={styles.delete}
//                   onClick={() => handleDelete(post._id)}
//                 >
//                   X
//                 </span>
//               </div>
//             ))
//           : "loading"}
//         <form className={styles.new}></form>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
