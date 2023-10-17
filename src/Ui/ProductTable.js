import React from 'react';
import {SearchInput,SearchDropDown,ProTable} from "./index"
import {ProductDropDown} from "../Data/DropDown"
import {productTableJson} from "../Data"

export default function ProductTable() {
  return (
    <div className='card mt-1'>
      <div className='card-header row '>
        <div className='col-6' >
          <h5  style={{ color: 'black'  }}>Product sales</h5>
        </div>

        <div className='d-md-flex d-sm-block col-6 justify-content-end'  >
        <SearchInput />
      <SearchDropDown options={ProductDropDown}/>
        </div>
      </div>

      <div className='card-body table-card'>
        <ProTable tabledata={productTableJson}/>
      </div>
    </div>
  );
}
