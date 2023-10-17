import React from 'react'

export default function ErningCard({contant}) {
  return (

    // {
    //   text: 'Total Sales',
    //   iconClass: 'fa fa-chart-bar',
    //   textColor: '#DD1327',
    //   backgroundColor: '#FFBDE1',
    //   heading: 'Total Sales Heading',
    //   number: 1234,
    //   percent: 95,
    //   arrowClass: 'fa fa-arrow-up', // Replace with the actual class for the "arrow up" icon
    // },
    <>
    {contant.map((item, index) =>{
      return (
        <div className=' d-flex justify-content-center align-items-center earning-card card m-1 '>
<div className='d-flex justify-content-center align-items-center '>
  <div className='earning-contant d-flex justify-content-center align-items-center me-2' style={{backgroundColor: `${item.backgroundColor}`,color: `${item.textColor}`}}>
<i className={`${item.iconClass}`}></i>
  </div>
  <div className='m-0 p-0 earn-contant-box' >
    <small className='d-block' >{item.text}</small>
    <span className='m-0 p-0 earn-contant-num' >${item.number} K</span>
    <div className='m-0 p-0 earn-contant-arrow'>
      <small className='' > <i className={`${item.arrowClass} `} style={{color: `${item.textColor}`}} > </i> <span style={{color: `${item.textColor}`}}>{item.percent}</span> <span style={{color :"gray"}}>  this month</span> </small>
    </div>
  </div>
</div>
    </div>

      )
    })}

    

    </>


  )
}
