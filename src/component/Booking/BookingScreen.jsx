import React, { useEffect, useState } from 'react'
import {Layout} from "antd"
import { Col, Row, Card, Button, Input } from 'antd';
import Navigation from '../Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import BookingPart from './BookingPart/BookingPart';
import "./style.css"; 

const { Header, Content } = Layout;

function BookingScreen() {
    // const API_PP_PEOPLE = "https://api.themoviedb.org/3/person/popular?api_key=9b00e03c6d53581effb063d999d11128&language=en-US&page=1"
    // const [pppeople, setPppeople] = useState([])
    // const [page, setPage] = useState('1')
    
    // const [numberPeople, setNumberPeople] = useState(4)

    // const loadMore = (() => {
    //     setNumberPeople(numberPeople + numberPeople)
    //     console.log(numberPeople)
    // })
    



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
            <content>
            <Row justify={'center'}>
                <Col span={2}/>
                <Col span={20}>
                    <div class = "space"> </div>

                    <BookingPart/>
                </Col>
                <Col span={2}/>    
            </Row>
            </content>
            <Footer />
        </Layout>
    </div>
  )
}

export default BookingScreen