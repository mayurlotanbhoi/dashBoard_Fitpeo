import React from 'react'
import {SearchDropDown} from "./index"
import { OverweivJson } from '../Data'
import {OverweivDropDown} from "../Data/DropDown"



export default function Overwiev() {
  return (
    <div className='card '>
    <div className=' card-header d-flex justify-content-between'>
    <div>
    <h5 className='' style={{color :"black"}}>Overview</h5>
    <small>Monthly Earnings</small>
    </div>
    <div>
      {/* <SearchDropDown/> */}
      <SearchDropDown options={OverweivDropDown}/>
    </div>
   </div>
   
    <div className=' card-body'>
    <div className="graf-row row justify-content-between" >
  {OverweivJson.map((data, index) => (
    <div key={index} className="graf-col col-1 p-0" >
    <span className="month">{data.month}</span>
      <div className="bar card" style={{ height: `${data.percent}%`, backgroundColor : `${data.month == 'Aug' ? '#5A32EA': '#e7ebf3'}`, }}>
      </div>
    </div>
  ))}
</div>
</div>
    </div>
  )
}
