import React from 'react'
import { NavItems,UserProfile } from '../Ui'
import { NavJson } from '../Data'

export default function NavBar() {
  
  return (
    <div className=' Nav-Bar d-flex flex-column  align-items-center' >
  <div className='nav-heading mt-3 mb-3' style={{width: "80%"}}>
    <h4> <i className='fa  fa-chart-pie me-2'></i><span>Dashboard</span></h4>
  </div>
  <nav className='nav-tag ' >
 <ul className='nav-ul w-100 m-0 p-0'>
 <NavItems NavData={NavJson}/>
 
 </ul>
  </nav>
  <UserProfile/>

  </div>


    
   

   

   
  )
}
