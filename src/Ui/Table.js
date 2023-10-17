import React from 'react'

export default function Table({tabledata}) {
  return (
    <table className="product-table table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th className="col-lg-9 col-md-6 col-8">Product Name</th>
              <th className="col-lg-1 col-md-2 col-2">Stock</th>
              <th className="col-lg-1 col-md-2 col-2">Price</th>
              <th className="col-lg-1 col-md-2 col-2">Total sales</th>
            </tr>
          </thead>
          <tbody>

          
     
    

          {tabledata.map((Titems, index)=>{
            return(
                <tr key={index}>
              <td className="col-lg-9 col-md-6 col-8">
                <div className="d-flex align-items-center">
                  <img
                    src={`${Titems.imageUrl}`}
                    alt=""
                    style={{ width: '4rem', height: '2.5rem' }}
                    className='rounded-3'
                  />
                  <div className="ms-3 lh-1">
                    <strong className="fw-bold mb-1 d-block text-sm">{Titems.productName}</strong>
                    <small className="text-muted mb-0 text-sm">{Titems.shortDescription}</small>
                  </div>
                </div>
              </td>
              <td className="col-lg-1 col-md-2 col-2">
                <small className="fw-normal mb-1">{Titems.stock}</small>
              </td>
              <td className="col-lg-1 col-md-2 col-2">
                <strong className="text-sm">&#8377; {Titems.price}</strong>
              </td>
              <td className="col-lg-1 col-md-2 col-2">
                <p className="text-sm">{Titems.totalSell}</p>
              </td>
            </tr>
            )

          })}


            


          </tbody>
        </table>
  )
}
