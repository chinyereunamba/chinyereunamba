import Link from 'next/link'
import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/#about'}>About</Link></li>
          <li><Link href={'/#portfolio'}>Porfolio</Link></li>
          <li><Link href={'/#contact'}>Contact</Link></li>
          <li><Link href={'/#blog'}>Blog</Link></li>
        </ul>
        <ul>
          <li>I am <b>avaliable</b></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header