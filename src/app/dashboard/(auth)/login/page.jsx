"use client"

import React, { useState } from 'react'
import styles from "./page.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {

  const session = useSession()
  const router = useRouter()
  // const params = useSearchParams();
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  // useEffect(() => {
  //   setError(params.get("error"));
  //   setSuccess(params.get("success"));
  // }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>
       {/* <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1> */}
          <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
        type="email" 
        placeholder='Email' 
        className={styles.input} 
        required
        />
        <input 
        type="password" 
        placeholder='password' 
        className={styles.input} 
        required
        />
        <button className={styles.button}>Login</button>
      </form>
      <button 
      onClick={()=>signIn("google")}
      className={styles.button + " " + styles.google}
      > Login with Google </button>
       <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  )
}

export default Login