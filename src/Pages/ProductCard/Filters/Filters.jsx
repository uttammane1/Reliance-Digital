import React from 'react'
import Accordians from './Accordians';
import PriceRange from "./PriceRange"
const Filters = ({data}) => {

  return (
    <div>
    <PriceRange/>
  <Accordians data={data}/>
  
    </div>
  )
}

export default Filters
