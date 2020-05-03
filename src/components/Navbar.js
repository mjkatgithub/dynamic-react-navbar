import React from 'react'
import styles from '../styles.module.css'

const Navbar = ({ links }) => {
  const linkList = links.map((link) => {
    return (
      <li key={link.key}>
        <a href={link.path}>{link.caption}</a>
      </li>
    )
  })
  return (
    <div className={styles.navbar}>
      <ul>{linkList}</ul>
    </div>
  )
}

export default Navbar
