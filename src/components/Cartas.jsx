import React from 'react'
import Image from 'next/image'
import cartas from "../assets/cards.webp"
import "../css/cartas.css"

export default function Cartas() {
  return (
    <div>
        <div>
            <Image src={cartas} className='lal'/>
        </div>
    </div>
  )
}
