import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="header">
        <h1 className="logo"> <u>Gym Equipment </u></h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/equipment">Equipment</Link>
            <Link href="/contact">Contact</Link>
            < FaShoppingCart style={{fontSize: "19px"}}/>
        </nav>
    </header>
  )
}

export default Header;