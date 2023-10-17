import React from 'react'

export default function SearchDropDwon({options}) {
  
  return (
<select className=' rounded-1 p-2 ps-3 pe-3 border-0' style={{color : "gray" , fontSize: "1rem", backgroundColor: "#FAFBFF"}}>
          {options.map ( (item, index) =>{
            return (
              <option value={item.value} key={index}>{item.value}</option>
            )
          })
          }
        </select>
  )
}
