import React from 'react'
import { NavBar, Board } from '../Components'

export default function Home() {
  return (
    <div className='row'>
    <div className=' col-sm-12 col-md-3 col-lg-2 p-0  m-0'><NavBar/></div>
    <div className='Board col-sm-12 col-md-9 col-lg-10 p-0'>

     <Board/>
     
     </div>
    </div>
  )
}
