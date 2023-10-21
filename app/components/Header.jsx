import Link from 'next/link'
import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li className={style.active}><Link href={'/'}>Home</Link></li>
          <li><Link href={''}>About</Link></li>
          <li><Link href={''}>Porfolio</Link></li>
          <li><Link href={''}>Blog</Link></li>
          <li><Link href={''}>Contact</Link></li>
        </ul>
        <ul>
          <span>I am <b>open to</b> offers.</span>
        </ul>
      </nav>
        <div className={style.burger}>
          <div></div>
          <div></div>
        </div>
    </header>
  )
}

export default Header