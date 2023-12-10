import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {Layout} from "antd"
import {Row, Col, Card} from "antd"
import Navigation from '../Header'
import Footer from '../Footer/Footer'
import {CaretLeftOutlined, CaretRightOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined} from '@ant-design/icons';
import { SmoothHorizontalScrolling } from '../Content/utils';
import { useRef } from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components"
import "./style.css"

const { Header, Content } = Layout;

function DetailPeople() {

    const {id} = useParams()
    const [people, setPeople] = useState([])
    const [personMovie, setPersonMovie] = useState([])

    const API_PEOPLE = `https://api.themoviedb.org/3/person/${id}?api_key=9b00e03c6d53581effb063d999d11128&language=en-US`
    const API_PERSON_MOVIE = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=9b00e03c6d53581effb063d999d11128&language=en-US`

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
        fetch(API_PEOPLE)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPeople(data)
        })
    }, [])

    useEffect(() => {
        fetch(API_PERSON_MOVIE)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPersonMovie(data.cast)
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
                {
                    <Card style={{marginTop: 40}}>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={7} className="col-image">
                                <img src={`https://www.themoviedb.org/t/p/original/${people.profile_path}`} alt="" />
                                <Row justify={"left"} style={{paddingTop: 15}}>
                                    <Col className='col-icon'><FacebookOutlined /></Col>
                                    <Col className='col-icon'><TwitterOutlined /></Col>
                                    <Col className='col-icon'><InstagramOutlined /></Col>
                                </Row>
                                <h3 className='personInfo'>Personal Info</h3>
                                <Row>
                                    <Col>
                                        <h4>Known For</h4>
                                        <p>{people.known_for_department}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>Gender</h4>
                                        <p>{people.gender === 2 ? 'Male' : 'Female'}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>Birthday</h4>
                                        <p>{people.birthday}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>Place of Birth</h4>
                                        <p>{people.place_of_birth}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>Also Known As</h4>
                                        {/* <p>{people.also_known_as.join()}</p>    */}
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={14} className="col-content">
                                <h1>{people.name}</h1>
                                <h3>Biography</h3>
                                <p>{people.biography}</p>
                                <h3>Known For</h3>
                                <MoviesSlider className='movieslider' ref={sliderRef}
                                style={
                                personMovie && personMovie.length > 0
                                ? {
                                    gridTemplateColumns: `repeat(${personMovie.length}, 150px)`
                                }
                                : {}
                                }
                                >
                                    {personMovie.length !== 0 ? personMovie.map((data, index) => (
                                    <Link to={`/movie/${data.id}`} style={{color: "white"}} key={index}>
                                        <div className='movieitem' ref={movieRef}>
                                        <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
                                        <div className='moviename'>{data.title || data.name}</div>
                                        </div>
                                    </Link>
                                    )) : <div>loading</div>}
                        
                                </MoviesSlider>
                                <div className='btnleft3' onClick={handleScrollLeft}>
                                <CaretLeftOutlined className='icon'/>
                                </div>
                                <div className='btnright3' onClick={handleScrollRight}>
                                <CaretRightOutlined className='icon'/>
                                </div>
                            </Col>
                            <Col span={3}></Col>
                        </Row>
                    </Card>
                }
            </Content>
            <Footer />
        </Layout>
    </div>
  )
}

export default DetailPeople;;

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