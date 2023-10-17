import React from 'react'

export default function SearchInput() {
  return (
    <div className='search-imput m-0 p-0' >
      <div className="container-fluid ">
    <form className="d-flex input-group w-auto h-auto  " >
    <span className="input-group-text border-0 " id="search-addon" style={{backgroundColor :"white"}}>
        <i className="fas fa-search" style={{color:"#E7EBF3"}}></i>
      </span>
      <input
        type="search"
        className="form-control border-0"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        
      />
      
    </form>
  </div>
    </div>
  )
}
