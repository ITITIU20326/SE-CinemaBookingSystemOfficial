import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Layout} from "antd"
import {Button} from "antd"
import { Col, Row} from 'antd';
import Navigation from '../Header';
import Footer from '../Footer/Footer';
import { SmoothHorizontalScrolling } from '../Content/utils';
import { useRef } from 'react';
import {CaretLeftOutlined, CaretRightOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined} from '@ant-design/icons';
import styled from "styled-components"
import "./style.css"
import { Link, useNavigate } from 'react-router-dom';
import YourComponent from './Time/time';
import Day from './Day/day';
import Time from './Time/time';

const { Header, Content } = Layout;
// Sample data representing the schedule
// CinemaSchedule component to display the booking schedule
   
function BookingMovie() {
  const {id} = useParams()
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
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    }, []);

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
            <Row>
                <Col></Col>
              <Col span={14}>
              <Day/>
              <Time/>
              <Time/>
              <Time/>
              </Col>
              
              <Col style={{ marginTop: 80}} span={6} className="col-img"><img src={`https://www.themoviedb.org/t/p/original${detail.poster_path}`}></img>
                <Col> 
                  <Col>
                    <h4>Original Title</h4>
                    <p>{detail.original_title}</p>
                  </Col>
                </Col>
                <Col> 
                  <Col>
                    <h4>Original Title</h4>
                    <p>{detail.original_title}</p>
                  </Col>
                </Col>
                <Col> 
                  <Col>
                    <h4>Original Title</h4>
                    <p>{detail.original_title}</p>
                  </Col>
                </Col>
                <Col> 
                  <Col>
                    <h4>Original Title</h4>
                    <p>{detail.original_title}</p>
                  </Col>
                </Col>
                <Col> 
                  <p className='booking-form'>
                    <h4>Original Title</h4>
                    <p>{detail.original_title}</p>
                  </p>
                </Col>
              </Col>
              
          </Row>
          </Content>
          <Footer />
      </Layout>
  </div>
)
                          }
export default BookingMovie
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

