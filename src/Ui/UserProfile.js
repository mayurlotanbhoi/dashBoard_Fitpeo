import React from 'react'

export default function UserPeofile() {
  return (
    <div className='user-profile  d-flex justify-content-between align-items-center  p-2 mb-2  position-absolute'  >
  <div className=' d-flex justify-content-between align-items-center lh-1'>
  <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle me-2"
            height="32"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
   <div >
    <strong className=' d-block' style={{fontSize:"0.8rem", color:"white"}}>Mayur</strong>
    <small className=' fw-bolder' style={{fontSize:"0.7rem"}}> project manager</small>
   </div>
    </div>
  <i className='fa fa-chevron-down'></i>

  </div>
  )
}
