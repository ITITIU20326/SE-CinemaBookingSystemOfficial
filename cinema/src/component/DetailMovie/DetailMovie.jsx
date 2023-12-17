import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Layout} from "antd"
import { Col, Row} from 'antd';
import Navigation from '../Header';
import Footer from '../Footer/Footer';
import { SmoothHorizontalScrolling } from '../Content/utils';
import { useRef } from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons';
import styled from "styled-components"
import "./style.css"
import Recommendations from './Recommendations/Recommendations';
import { Link, useNavigate } from 'react-router-dom';
import {setID, id} from './../Booking/BookingPart/const';
const { Header, Content } = Layout;
   
function DetailMovie() {
    const {id} = useParams()
    setID(id);
    const [detail, setDetail] = useState({})
    const [casts, setCasts] = useState([])
    const [recs, setRecs] = useState([])
    const API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=9b00e03c6d53581effb063d999d11128&language=vi`;
    const API_CAST = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9b00e03c6d53581effb063d999d11128&language=en-US`;
    const API_REC =  `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=9b00e03c6d53581effb063d999d11128&language=en-US&page=1`

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

    useEffect(() => {
        fetch(API_DETAIL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDetail(data)
        })
    }, [])

    useEffect(() => {
      fetch(API_CAST)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setCasts(data.cast)
      })
  }, [])

    useEffect(() => {
      fetch(API_REC)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setRecs(data.results)
      })
  }, [])

    let navigate = useNavigate()
    let handleBooking = () => {
      localStorage.removeItem("accessToken")
      navigate("/booking")
    }

  return (
    <div>
        <Layout>
            <Header>
              <Row justify={'center'}>
                <Col span={2}/>
                <Col span={20}>
                  <Navigation />
                </Col>
                <Col span={2}/>
              </Row>
            </Header>
            <Content>
            <Row justify={'center'}>
                <Col className='detail-container'>
                    <Row style={{padding: 20}}></Row>
                      {
                        <Row justify={"center"} className="row-body"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
                            backgroundPosition: 'top right', 
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}>
                          
                            <Col span={1}></Col>
                            <Col span={7} className="col-img"><img src={`https://www.themoviedb.org/t/p/original${detail.poster_path}`}></img></Col>
                            <Col span={15} className="col-detail">
                              <h1>{detail.title || detail.name}</h1>
                              <p><i style={{paddingTop: 30}}>{detail.tagline}</i></p>
                              <h3>Overview</h3>
                              <p className='detail-overview'>{detail.overview}</p>
                            </Col>
                            <Col span={1}></Col>
                          
                        </Row>
                      }
                    <Row justify={"center"}>
                      <Col span={1}></Col>
                      <Col span={17} className='trending-container'>
                        <h1>Top Billed Cast</h1>
                        <CastSlider className='movieslider' ref={sliderRef}
                        style={
                          casts && casts.length > 0
                          ? {
                            gridTemplateColumns: `repeat(${casts.length}, 150px)`
                          }
                          : {}
                        }
                        >
                            {casts.length !== 0 ? casts.map((cast) => (
                              <Link to={`/person/${cast.id}`}  key={cast.id}>
                                <div className='movieitem' ref={movieRef} style={{color: "white"}}>
                                  <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="" />
                                  <div className='moviename'>
                                    <p>{cast.name}</p>
                                    <p>{cast.character}</p>
                                  </div>
                                </div>
                              </Link>
                            )) : <div>loading</div>}
                            
                        </CastSlider>
                        <div className='btnleft1' onClick={handleScrollLeft}>
                          <CaretLeftOutlined className='icon'/>
                        </div>
                        <div className='btnright1' onClick={handleScrollRight}> 
                          <CaretRightOutlined className='icon'/>
                        </div>
                        <Recommendations recs={recs}/>
                      </Col>
                      <Col span={5} style={{marginLeft: 15, marginTop: 37}}>
                        <Row justify={"left"} style={{marginBottom: 15 ,marginTop: 35}}>
                          <div className="background-booking">
                            <p><button onClick={handleBooking} className='booking'>Booking Now</button></p>
                          </div>
                        </Row>
                        <Col> 
                          <Col>
                            <h4>Original Title</h4>
                            <p>{detail.original_title}</p>
                          </Col>
                        </Col>
                        <Row>
                          <Col>
                            <h4>Status</h4>
                            <p>{detail.status}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h4>Original Language</h4>
                            <p>{detail.original_language}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h4>Budget</h4>
                            <p>$ {detail.budget}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h4>Revenue</h4>
                            <p>$ {detail.revenue}</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={1}></Col>
                    </Row>
                </Col>
              </Row>
            </Content>
            <Footer />
        </Layout>
    </div>
  )
}

export default DetailMovie;

const CastSlider = styled.div `
    &:hover .movieitem{
      opacity: 0.7;
    }
    .movieitem{

      &:hover{
        opacity: 1;
      }
    }
`

