import React, { useState } from 'react';
import { AccordianApi } from './AccordianAPI';
import AccordianData from './AccordianData';

const Accordian = () => {
    const [data , setData] = useState(AccordianApi)
  return (
    <>
     {
        data && data.map((item)=>{
            return <AccordianData key={item.id} {...item} />
        })
     } 
    </>
  )
}

export default Accordian
