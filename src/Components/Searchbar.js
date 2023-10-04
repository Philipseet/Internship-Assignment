import React from 'react'
import {useNavigate} from "react-router-dom";
import Allcars from './Allcars';
export default function Searchbar() {
  const navigate = useNavigate();
  const change=()=>{
    navigate(`/search`)
  }
  return (
    <button type="button" className="btn btn-primary my-3" onClick={change}>Click here to begin search</button>
  )
}
