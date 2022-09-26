import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <div>
        <Link href='/presence'>Presence</Link>
        <Link href='/transform'>Transform</Link>
      </div>
    </nav>
  )
}

export default Navbar