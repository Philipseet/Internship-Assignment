import React from 'react'
export default function Caritem(props) {
  return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <img src={`https://source.unsplash.com/160x160/?${props.car},cars`} className='container'/>
                <h5 className="card-title">{props.car}</h5>
                <p className="card-text">{props.model}</p>
                <p className="card-text">{props.price}</p>
                <p className="card-text">{props.availability}</p>
            </div>
        </div>
      </div>
  )
}
