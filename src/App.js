import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [slide, Setslide] = useState(data);
  const [index, setindex] = useState(0);
  const nextSlide = () => {
    setindex((oldIndex) => {
      let index = oldIndex + 1
      if (index > slide.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setindex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = slide.length - 1
      }
      return index
    })
  }
  useEffect(() => {
    let slider = setInterval(() => {
      setindex((oldIndex) => {
        let index = oldIndex + 1
        if (index > slide.length - 1) {
          index = 0
        }
        return index
      })
    }, 3000)
    return () => {
      clearInterval(slider)
    }
  }, [index])
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {slide?.map((item, slideindex) => {
          let slideClass = "nextSlide";
          if (slideindex === index) {
            slideClass = "activeSlide";
          }
          if (
            slideindex === index - 1 ||
            (index === 0 && slideindex === slide.length - 1)
          ) {
            slideClass = 'lastSlide'
          }
          return (
            <article className={slideClass} key={slideindex}>
              <img src={item.image} alt="" className="person-img" />
              <h4>{item.name}</h4>
              <p className="title">{item.title}</p>
              <p className="text">{item.quote}</p>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={()=>prevSlide}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={()=>nextSlide}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
