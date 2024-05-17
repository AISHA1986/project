import Link from 'next/link'
import React from 'react'


export default function Catlinks({title, bg, link}) {
  return (
    <span className={`inline-block py-2 px-3 ${bg} m-2 uppercase `}>
      <Link href={link}>
      {title} 
      </Link>
      </span>
  )
}