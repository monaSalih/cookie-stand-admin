import Head from 'next/head'
import {useState} from 'react'
export default function Home() {
  const[storeData,setstoreData] = useState([]);
  
  function eventHandler(event){
    event.preventDefault();
    let shopData={
      location:event.target.location.value,
      minCustomer: event.target.min.value,
      maxCustomer:event.target.max.value,
      avgCookies:event.target.ave.value,

    }
    setstoreData(shopData)
  }
  return (
    <div className="">
      <Head className=""> <title>cookie-stand-admin
        </title> </Head>

        <header className="">
          <h1>
          cookie-stand-admin
          </h1>

        </header>

        <main className="">
          <from className="" onSubmit={eventHandler}>
            <div>
              <label> Location </label>
              <input name="loc"/>
            </div>
            <div>
            {/* Maximum Customers per Hour Average Cookies per Sale */}
              <label> Minimum Customers per Hour </label>
              <input name="loc"/>
            </div>

            <div>
            {/* Average Cookies per Sale */}
              <label> Maximum Customers per Hour  </label>
              <input name="loc"/>
            </div>

            <div>
            {/*  */}
              <label> Average Cookies per Sale  </label>
              <input name="loc"/>
            </div>
          </from>
        </main>
        <footer>
          &copy;2021
        </footer>
       
    </div>

  )
}
