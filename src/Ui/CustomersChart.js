import React from 'react'

export default function Costomer() {
  return (
    <div className='card ' >
    <div className=' card-header' ><div>
    <h5 className='' style={{color :"black"}}>Customers</h5>
    <small>Customers that Buy the Products</small>
    </div>

<div className='card-body d-flex justify-content-center align-items-center p-0 m-0' style={{height:"39vh"}}>
<div className='circul d-flex justify-content-center align-items-center'>
<div className='circul-one'></div>
<div className='circul-two'></div>
<div className=' chart-text position-absolute' style={{zIndex : "9999"}}>
    <h3>75%</h3>
    <p>Total New</p>
    <p>Customers</p>
</div>
</div>


    </div>
    </div>
    </div>
    //  </div>

    // </div>
  )
}
