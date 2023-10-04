import React, { useEffect, useState } from 'react'
import item from './data.json';
import Caritem from './Caritem';
import {useNavigate} from "react-router-dom";
export default function Allcars(props) {
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState('Volkswagon');
  setTimeout(() => {
    setAllData(item.cars)
  })
  const navigate = useNavigate();
  const change=()=>{
    navigate(`/`)
  }
  return (
    <div className='container my-3'>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}/>
      </form>
      <button type="button" className="btn btn-primary my-3" onClick={change}>Stop</button>
      <div className="row container">
            {allData.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.car.toLowerCase().includes(search);
              }).map((element) => {
                  return <div className="col-md-4" key={element.id}>
                  <Caritem car={element.car} model={element.car_model} price={element.price} availability={element.availability}/>
                </div>
              })}
        </div>
    </div>
  )
}
