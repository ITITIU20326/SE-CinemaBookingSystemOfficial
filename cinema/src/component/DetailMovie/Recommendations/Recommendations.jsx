import React from 'react'
import { SmoothHorizontalScrolling } from '../../Content/utils';
import { useRef } from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons';
import styled from "styled-components"
import "./style.css"

function Recommendations({recs}) {
    const sliderRef = useRef()
    const movieRef = useRef()
    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if(sliderRef.current.scrollLeft < maxScrollLeft){
        SmoothHorizontalScrolling(sliderRef.current,
            250,
            movieRef.current.clientWidth * 2,
            sliderRef.current.scrollLeft)
        }
    }
    const handleScrollLeft = () => {
        if(sliderRef.current.scrollLeft > 0){
        SmoothHorizontalScrolling(sliderRef.current,
            250,
            - movieRef.current.clientWidth * 2,
            sliderRef.current.scrollLeft)
        }
    }
  return (
    <div className='trending-container2'>
        <h1>Recommendations</h1>
            <RecSlider className='movieslider2' ref={sliderRef}
              style={
                recs && recs.length > 0
                ? {
                    gridTemplateColumns: `repeat(${recs.length}, 300px)`
                  }
                : {}
              }
            >
              {recs.length !== 0 ? recs.map((rec, index) => (
                <div className='movieitem2' key={index} ref={movieRef}>
                  <img src={`https://image.tmdb.org/t/p/original/${rec.backdrop_path}`} alt="" />
                  <div className='moviename2'>{rec.title || rec.name}</div>
                </div>
              )) : <div>loading</div>}
                            
            </RecSlider>
            {recs.length !== 0 ?
            <>
              <div className='btnleft2' onClick={handleScrollLeft}>
                <CaretLeftOutlined className='icon'/>
              </div>
              <div className='btnright2' onClick={handleScrollRight}>
                <CaretRightOutlined className='icon'/>
              </div>
            </>
            : <></>
            }
    </div>
  )
}

export default Recommendations;

const RecSlider = styled.div `
    &:hover .movieitem2{
      opacity: 0.7;
    }
    .movieitem2{

      &:hover{
        opacity: 1;
      }
    }
`