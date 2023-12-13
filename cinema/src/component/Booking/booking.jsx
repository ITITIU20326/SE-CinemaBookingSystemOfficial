import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Layout} from "antd"
import {Button} from "antd"
import { Col, Row} from 'antd';
import Navigation from '../Header';
import Footer from '../Footer/Footer';
import { SmoothHorizontalScrolling } from '../Content/utils';
import { useRef } from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons';
import styled from "styled-components"
import "./style.css"
import Day from './Day/day';
import Time from './Time/time';
import CinemaSchedule from './Time/time'

const { Header, Content } = Layout;
// Sample data representing the schedule
// CinemaSchedule component to display the booking schedule
   
function BookingMovie() {
  const {id} = useParams()
    const [selectedTime, setSelectedTime] = useState(null);
    const [detail1, setDetail1] = useState({})
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
  const handleSelectTime = (slot) => {
    setSelectedTime(slot);
  };

  const handleBookNow = () => {
    if (selectedTime) {
      // Implement your booking logic here
      alert(`Booking confirmed for ${selectedTime.time}`);
    } else {
      alert('Please select a time slot');
    }
  };

    useEffect(() => {
        fetch(API_DETAIL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDetail1(data)
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
              <Col>
              <Day/>
              <div className='btnleft' onClick={handleScrollLeft}>
                <CaretLeftOutlined className='icon'/>
              </div>
              <div className='btnright' onClick={handleScrollRight}>
                <CaretRightOutlined className='icon'/>
              </div>
              </Col>
              <Col>
              <p className='name-class'>REGULAR 2D</p>
              <Time/>
              </Col>
              <Col>
              <p className='name-class'>GOLD CLASS 2D</p>
              <Time/>
              </Col>
              <Col>
              <p className='name-class'>VELVET 2D</p>
              <Time/>
              </Col>
              </Col>
              
              <Col style={{ marginTop: 80}} span={6} className="col-img"><img src={`https://www.themoviedb.org/t/p/original${detail1.poster_path}`}></img>
                <Col> 
                  <Col>
                  <h1>{detail1.title || detail1.name}</h1> 
                  </Col>
                </Col>
                <Col> 
                  <Col>
                    <h4>Original Title</h4>
                    <p>{detail1.original_title}</p>
                  </Col>
                </Col>
                <Col> 
                  <Col>
                    <h4>Original Title</h4>
                    <p>{detail1.original_title}</p>
                  </Col>
                </Col>
                <Col> 
                  <Col>
                    <h4>Original Title</h4>
                    <p>{detail1.original_title}</p>
                  </Col>
                </Col>
                <Col> 
                  <Col>
                    <h4>Original Title</h4>
                    <p>{detail1.original_title}</p>
                  </Col>
                </Col>
                <Col> 
                  <Col className='booking-form'>
                    <h4>FRESHMEN TAN PHU</h4>
                    <h4>MON, 16 OCTOBER 2023</h4>
                    <h4>REGULAR 2D </h4>
                    <div className='content-booking'>
                      <p>Selected Time: {selectedTime ? selectedTime.time : 'None'}</p>
                      {/* <CinemaSchedule onSelectTime={handleSelectTime} /> */}
                      <h4>* Seat selection can be made later</h4>
                      <div className='background-booking'><button className='booking' onClick={handleBookNow}>Book Now</button></div>
                    </div>
                    <p>{detail1.original_title}</p>
                  </Col>
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

