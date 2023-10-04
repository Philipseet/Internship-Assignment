import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import Caritem from './Caritem';
import item from './data.json';
export default function Cars(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(parseInt(props.page));
  const navigate = useNavigate();
  setTimeout(() => {
    setData(item.cars)
    console.log(data)
  })
  const nextPage=()=> {
    setPage(page+1);
    navigate(`/page/${page+1}`);
  }
  const prevPage=()=>{
    setPage(page-1)
    if(page===2)
    {
      navigate(`/`)
    }
    else
    {
      navigate(`/page/${page-1}`);
    }
  }
  const change=()=>{
    navigate(`/search`)
  }
  return (
    <>
    <div className='my-3 container'>
      <div className="container">
    <h1 style={{textAlign:'center'}}>Here is our latest collection of cars</h1>
      </div>
      <div className="container">
        <div className="row container">
          {data.map((element) => {
            {
              console.log(page)
            }
            if(element.page===page)
            {
              return <div className="col-md-4" key={element.id}>
              <Caritem car={element.car} model={element.car_model} price={element.price} availability={element.availability}/>
            </div>
            }
          })}
        </div>
        <div className="navigation">
        <button type="button" className={`btn btn-primary ${page===1?"disabled":null}`} onClick={prevPage}>Prev</button>
        <button type="button" className={`btn btn-primary mx-4 ${page===10?"disabled":null}`} onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
    </>
  )
}
