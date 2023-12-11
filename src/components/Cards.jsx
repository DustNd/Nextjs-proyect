import React from 'react'
import Image from 'next/image'
import "../css/card.css"
import Cod from '../assets/a.webp'

export default function Cards() {
  return (
    <div>
      <div className='image-container'>
        <Image src={Cod} className='image'/>
      </div>
    </div>
  )
}
