'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
export default function Home() {
  const [nombres, setNombres] = React.useState([])
  React.useEffect(() => {
        async function llamada(params) {
            const data=await fetch("http://localhost:3000/api/nombres")
            const resultado=await data.json()
            setNombres(resultado)
            console.log(resultado)
        }
        llamada()
  }, [])
  return (
    <main className={styles.main}>
        <ul>
          {nombres.map((item,index)=> {
            return <li key={index}>{item}</li>
          })}
        </ul>
    </main>
  )
}
