import React from 'react'
import { Earningcard,SearchInput } from '../Ui'
import { EarningJson } from '../Data'
import { Overweiv, Costomer } from '../Ui'
import {ProductSell} from "./"

export default function Board() {
  return (
    
    <div className='Board-left  ps-md-3 pe-md-3 ps-lg-5 pe-lg-5'>

    <div className=' d-flex justify-content-between align-items-center w-100 text-center ps-1 pe-1' >
      <h6 className='p-0 m-0'>Hello Mayur ✋,</h6>
      <SearchInput/>
    </div>
    
<div className=' d-flex justify-content-between flex-wrap mt-5'>
    <Earningcard contant={EarningJson}/>
    </div>

    <div className='row  mt-lg-4  mb-lg-5 '>
    <div className=' col-lg-9 col-md-12 col-sm-12  mt-1  '><Overweiv/></div>
    <div className='col-lg-3 col-md-12 col-sm-12  mt-1  '> <Costomer/></div>
    </div>

    <div className='mb-5'>
    <ProductSell/>
    </div>
       

    </div>
  )
}
