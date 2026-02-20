import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-15 justify-between items-center px-3 bg-purple-400 flex text-white'>
    <div className="logo font-bold text-lg">
        <Link href="/">ShotLinks</Link>
    </div>
    <ul className="flex gap-4 items-center justify-center">
    <Link href="/"> <li>Home</li></Link>
     <Link href="/about"><li>About</li></Link>
     <Link href="/shorten"><li>Shorten</li></Link>
     <Link href="/contact"><li>Contact</li></Link>
     <li className="flex gap-3">
    <Link href="/generate"><button className='bg-purple-600 shadow-lg p-3 py-1 font-bold rounded-lg'>Try Now</button></Link>
    <Link href="/github"><button className='bg-purple-600 shadow-lg p-3 rounded-lg py-1 font-bold'>Github</button></Link>
     </li>
  </ul>
    </nav>
  )
}

export default Navbar
