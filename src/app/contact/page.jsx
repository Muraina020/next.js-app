import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt='contact' fill={true} className={styles.image}/>
        </div>
        <div className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="email" placeholder='email' className={styles.input} />
          <textarea placeholder='message' id="" cols="30" rows="10" className={styles.textarea}></textarea>
          <Button url="#" text="Send"/>
        </div>
      </div>
    </div>
  )
}

export default Contact