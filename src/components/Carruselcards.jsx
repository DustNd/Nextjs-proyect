import React from 'react'
import Image from 'next/image'
import "../css/carrusel.css"

import a from "../assets/a.webp"

export default function Carruselcards() {
  return (
    <div>
        <Image src={a} className='carta'/>
    </div>
  )
}
