import React from 'react'
import "./style.css"
import styled from "styled-components"
import { SmoothHorizontalScrolling } from '../utils';
import { useRef } from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom"

function WhatPopular({data}) {
    const sliderRef = useRef()
    const movieRef = useRef()
    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if(sliderRef.current.scrollLeft < maxScrollLeft){
        SmoothHorizontalScrolling(sliderRef.current,
            250,
            movieRef.current.clientWidth * 4,
            sliderRef.current.scrollLeft)
        }
    }
    const handleScrollLeft = () => {
        if(sliderRef.current.scrollLeft > 0){
        SmoothHorizontalScrolling(sliderRef.current,
            250,
            - movieRef.current.clientWidth * 4,
            sliderRef.current.scrollLeft)
        }
    }
  return (
    <div className='trending-container'>
        <h1>What's Popular</h1>
        <MoviesSlider className='movieslider' ref={sliderRef}
        style={
          data && data.length > 0
          ? {
            gridTemplateColumns: `repeat(${data.length}, 150px)`
          }
          : {}
        }
        >
            {data.map((data, index) => (
              <Link to={`/movie/${data.id}`} style={{color: "white"}} key={index}>
                <div className='movieitem' ref={movieRef}>
                  <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
                  <div className='moviename'>{data.title || data.name}</div>
                </div>
              </Link>
            ))}
            
        </MoviesSlider>
        <div className='btnleft' onClick={handleScrollLeft}>
          <CaretLeftOutlined className='icon'/>
        </div>
        <div className='btnright' onClick={handleScrollRight}>
          <CaretRightOutlined className='icon'/>
        </div>
    </div>
  )
}

export default WhatPopular

const MoviesSlider = styled.div `
    &:hover .movieitem{
      opacity: 0.7;
    }
    .movieitem{

      &:hover{
        opacity: 1;
      }
    }
`