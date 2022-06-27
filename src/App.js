import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [slide,Setslide]=useState(data)
  console.log(slide);
  return (
    <section className='section'>
      <div className="title"><h2><span>/</span>reviews</h2></div>
      <div className='section-center'>
       {slide?.map((item)=>(
         <article>
         <img src={item.image} alt="" className='person-img' />
         <h4>{item.name}</h4>
         <p className='title'>{item.title}</p>
         <p className='text'>{item.quote}</p>
         </article>
         )) }
      </div>
    </section>
  )
}

export default App;
