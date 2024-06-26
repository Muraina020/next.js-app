"use client"

import React, { useContext } from 'react'
import styles from "./darkMoodToggle.module.css"
import { ThemeContext } from '../../context/ThemeContext'

const DarkMoodToggle = () => {

    // const mode = "dark"
    const {toggle, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
         <div className={styles.icon}>🌙</div>
         <div className={styles.icon}>🔆</div>
         <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right: "2px"} }></div>
    </div>
  )
}

export default DarkMoodToggle