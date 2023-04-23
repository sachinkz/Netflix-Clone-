import React from 'react'
import "../RowPost/RowPost.css"
import{useState,useRef,useEffect} from 'react'
import axios from '../axios'
import {API_KEY, ImageUrl} from '../constants/constants'

function RowPost(props) {
const [state,setState]=useState([])
useEffect(() => {
  axios
    .get(props.link)
    .then((response) => {
      console.log(response.data.results);
      setState(response.data.results);
    });
}, []);


   const containerRef = useRef(null);
   const [scrollLeft, setScrollLeft] = useState(0);
   const handleScroll = (scrollOffset) => {
     setScrollLeft(
       (containerRef.current.scrollLeft =
         containerRef.current.scrollLeft+scrollOffset)
     );
   };
  return (
    <div className="container">
      <h2 className="category ">{props.title}</h2>
      <div className="scroll-arrow left" onClick={() => handleScroll(-500)}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="scroll-arrow right" onClick={() => handleScroll(500)}>
        <i className="fas fa-chevron-right"></i>
      </div>
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-items">
          {state.map((obj) => (
            <img
              className="poster"
              src={ImageUrl + obj.poster_path}
              alt="content"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RowPost
