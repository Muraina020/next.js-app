"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './page.module.css';
import DarkMoodToggle from '../darkMoodToggle/darkMoodToggle';
import { signOut, useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Portfolio', url: '/portfolio' },
  { id: 3, title: 'Blog', url: '/blog' },
  { id: 4, title: 'About', url: '/about' },
  { id: 5, title: 'Contact', url: '/contact' },
  { id: 6, title: 'Dashboard', url: '/dashboard' },
];

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Pacific</Link>
      <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
        <DarkMoodToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        {session && (
          <button onClick={signOut} className={styles.logout}>Logout</button>
        )}
      </div>
      <div className={styles.hamburger} onClick={handleMenuToggle}>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} className={styles.icon} />
        ) : (
          <FontAwesomeIcon icon={faBars} className={styles.icon} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
