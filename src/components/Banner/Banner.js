import React, { useEffect } from 'react'
import '../Banner/Banner.css'
import axios from '../axios'
import {API_KEY,ImageUrl} from '../constants/constants'
import { useState } from 'react'

function Banner() {
  const [state,setState]=useState({})
useEffect (()=>{
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    var setRN=Math.floor(Math.random() * response.data.results.length);
    setState(response.data.results[setRN]);
  });
},[])
  if(state.title){
    var title=state.title
  }else if(state.name){
    title=state.name
  }else{
    title='Title Is Missing'
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${state ? ImageUrl + state.backdrop_path : ""
        })`,
      }}
    >
      <div>
        <div className="content">
          <div className="name">
            <h1>{title}</h1>
          </div>
          <div className="banner-buttons">
            <button className="button">
              {" "}
              <i className="fa fa-play"></i>Play
            </button>
            <button className="button">
              <i className="fa fa-plus"></i> My List
            </button>
          </div>
          <div className="description">
            <h3 className="font">{state ? state.overview : ""}</h3>
          </div>
        </div>
        <div className="fade-bottom"></div>
      </div>
    </div>
  );
}

export default Banner
