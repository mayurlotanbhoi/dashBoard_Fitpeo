import React from 'react'

export default function ( {NavData}) {

  return (
    <>
    {NavData.map((items, index) =>{
        return (
   <li className='nav-list d-flex justify-content-between align-items-center p-2 mb-2' >
  <div> <i className={`fa ${items.iconClass}  NavIcons me-1`}></i> <small>{items.text}</small></div>
  <i className='fa fa-chevron-right'></i>
  </li>
        )
    })}
    </>
   
  )
}
