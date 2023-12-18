import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Layout} from "antd"
import { Col, Row} from 'antd';
import Navigation from '../../Header';
import Footer from '../../Footer/Footer';
import { SmoothHorizontalScrolling } from '../../Content/utils';
import { useRef } from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons';
import styled from "styled-components"
import "./style.css"
import {times, dates , addtimes, adddates, dropdates,droptimes, reset} from "../BookingPart/const"
import { Link, useNavigate } from 'react-router-dom';
import {setID, id} from '../BookingPart/const';

const { Header, Content } = Layout;
function BookingMovie() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [detail1, setDetail1] = useState({})
  const [casts, setCasts] = useState([])
  const [detail, setDetail] = useState({});
  const [movies, setMovies] = useState([]);

  const API_TRENDING="https://api.themoviedb.org/3/trending/all/day?api_key=9b00e03c6d53581effb063d999d11128";
  const API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=9b00e03c6d53581effb063d999d11128&language=vi`;

  var color = "rgb(240, 240, 240)";
  var color2 = "rgb(0, 157, 255)";  
  let handle = () => {
      let btns = document.getElementsByClassName("btn1"); 
          for (let i=0; i<btns.length; i++){    
              btns[i].addEventListener("click", function () {    
                  let buttonStyle = getComputedStyle(this);
                  let buttonColor =  buttonStyle["backgroundColor"];
                  if (buttonColor == color) {btns[i].style.backgroundColor = color2; addtimes("" + btns[i].textContent);}
                  else {btns[i].style.backgroundColor = color  ; droptimes("" + btns[i].textContent);  
              }
              });         
          }
      document.getElementById("time").innerText = times.toString(); 
 
  }
  let handle1 = () => {
    let btns = document.getElementsByClassName("btn2"); 
        for (let i=0; i<btns.length; i++){    
            btns[i].addEventListener("click", function () {    
                let buttonStyle = getComputedStyle(this);
                let buttonColor =  buttonStyle["backgroundColor"];
                if (buttonColor == color) {btns[i].style.backgroundColor = color2; adddates("" + btns[i].textContent);}
                else {btns[i].style.backgroundColor = color  ; dropdates("" + btns[i].textContent);  
            }
            });         
        }
    document.getElementById("date").innerText = dates.toString(); 

}


function removeItemAll(arr, value) {
const index = arr.indexOf(value);
    if (index > -1) { 
    arr.splice(index, 1); 
}
}
  useEffect(() => {
    fetch(API_TRENDING)
    .then((res)=>res.json())
    .then(response=>{
      // console.log(response);
      setMovies(response.results)
    
    })
  }, [])

  let data = movies;

  useEffect(() => {
      fetch(API_DETAIL)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setDetail(data)
      })
  }, [])
  let navigate = useNavigate()
  let handleBooking = () => {
    localStorage.removeItem("accessToken")
    navigate("/BookingPart")
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
            <Row>
              <Col span={1}></Col>
              <Col span={14}>
              <Col>
              <h1 className='name-class'>Cinema Booking System</h1>
              <div className="content-board">
              <button className='btn2 date' onClick={handle1}>17 Dec</button>
              <button className='btn2 date' onClick={handle1}>18 Dec</button>
              <button className='btn2 date' onClick={handle1}>19 Dec</button>
              <button className='btn2 date' onClick={handle1}>20 Dec</button>
              <button className='btn2 date' onClick={handle1}>21 Dec</button>
              <button className='btn2 date' onClick={handle1}>22 Dec</button>
              <button className='btn2 date' onClick={handle1}>23 Dec</button>
              <button className='btn2 date' onClick={handle1}>24 Dec</button>
              <button className='btn2 date' onClick={handle1}>25 Dec</button>
              <button className='btn2 date' onClick={handle1}>26 Dec</button>
              <button className='btn2 date' onClick={handle1}>27 Dec</button>
              </div>

              </Col>
              <Col>
              <p className='name-class'>REGULAR 2D</p>
              <div className='content-board-time'>
                <button className='btn1 time' onClick={handle}>1:00</button>
                <button className='btn1 time' onClick={handle}>2:00</button>
                <button className='btn1 time' onClick={handle}>3:00</button>
                <button className='btn1 time' onClick={handle}>4:00</button>
              </div>
              <div className='content-board-time'>
                <button className='btn1 time' onClick={handle}>5:00</button>
                <button className='btn1 time' onClick={handle}>6:00</button>
                <button className='btn1 time' onClick={handle}>7:00</button>
                <button className='btn1 time' onClick={handle}>8:00</button>
              </div>
              </Col>
              <Col>
              <p className='name-class'>GOLD CLASS 2D</p>
              <div className='content-board-time'>
                <button className='btn1 time' onClick={handle}>1:00</button>
                <button className='btn1 time' onClick={handle}>2:00</button>
                <button className='btn1 time' onClick={handle}>3:00</button>
                <button className='btn1 time' onClick={handle}>4:00</button>
              </div>
              <div className='content-board-time'>
                <button className='btn1 time' onClick={handle}>5:00</button>
                <button className='btn1 time' onClick={handle}>6:00</button>
                <button className='btn1 time' onClick={handle}>7:00</button>
                <button className='btn1 time' onClick={handle}>8:00</button>
              </div>
              </Col>
              <Col>
              <p className='name-class'>VELVET 2D</p>
              <div className='content-board-time'>
                <button className='btn1 time' onClick={handle}>1:00</button>
                <button className='btn1 time' onClick={handle}>2:00</button>
                <button className='btn1 time' onClick={handle}>3:00</button>
                <button className='btn1 time' onClick={handle}>4:00</button>
              </div>
              <div className='content-board-time'>
                <button className='btn1 time' onClick={handle}>5:00</button>
                <button className='btn1 time' onClick={handle}>6:00</button>
                <button className='btn1 time' onClick={handle}>7:00</button>
                <button className='btn1 time' onClick={handle}>8:00</button>
              </div>
              </Col>
              </Col>
              
              <Col style={{ marginTop: 80}} span={7} className="col-img">
              
              <img src={`https://www.themoviedb.org/t/p/original` + detail.poster_path} alt=""></img>
                <Col> 
                  <Col>
                  <h1>{detail.original_title}</h1> 
                  </Col>
                </Col>
                
                
                <Col> 
                  <Col className='booking-form'>
                    <h4>FRESHMEN TAN PHU</h4>
                    <p>REGULAR 2D </p>
                    <div className='content-booking'>
                      <div className='showdateselected' id='date'></div>
                      <div className="showtimeselected" id="time"></div>
                      <p>* Seat selection can be made later</p>
                      <div className='background-booking'><button className='booking' onClick={handleBooking}>Book Now</button></div>
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