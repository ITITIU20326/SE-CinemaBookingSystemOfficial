import React, { useEffect, useState } from 'react'
import { id, seats, prices, times, dates } from "../Booking/BookingPart/const";
import {Link, useNavigate} from "react-router-dom"
import Navigation from '../Header'
import Footer from '../Footer/Footer'
import { Form, Button, Card, Alert } from "react-bootstrap"
import "./style.css"
import { Col, Row} from 'antd';
import { Layout } from 'antd'
const { Header, Content } = Layout;

function Payment() {
    const movieDate = new Date();
    const [detail, setDetail] = useState({});
    const API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=9b00e03c6d53581effb063d999d11128&language=vi`;
    useEffect(() => {
        fetch(API_DETAIL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDetail(data)
        })
    }, [])
    let serviceFee = 0;
    let voucher = 0;
    let count = seats.length;
    let totalPrice = (serviceFee + prices)*count - voucher;
    return (
    <div>
        <Layout className="main-payment">
        <Header>
          <Row justify={'center'}>
            <Col span={1} />
            <Col span={20}>
              <Navigation />
            </Col>
            <Col span={1} />
          </Row>
        </Header>
        <Content>
            <Row>
            <Col span={12}>
            <Card className="movie-payment">
                <Card.Body>
                    <Row><Card.Title className='payment-title'>PAYMENT CONFIRMATION</Card.Title></Row>
                    <Row>Confirm payment for the seats you ordered</Row>
                    <br/>
                    <Row className="payment-schedule-detail">Schedule Details</Row>
                    <Row className="payment-header">Movie title</Row>
                    <Row className="payment-content">{detail.original_title}</Row>
                    <Row className="payment-header">Date</Row>
                    <Row className="payment-content">{
                        dates
                    }</Row>
                    <Row className="payment-header">
                        <Col span={14}>Class</Col>
                        <Col span={4}>Time</Col>
                    </Row>
                    <Row>
                        <Col span={14} className="payment-content">REGULAR 2D</Col>
                        <Col span={4} className="payment-content">{times}</Col>
                    </Row>
                    <Row className="payment-header">Ticket </Row>
                    <Row className="payment-content">{seats}</Row>
                </Card.Body>
            </Card>
            </Col>
            <Col span={6}>
            <Card className="order-summary">
                <Card.Body>
                    <Row><Card.Title className='order-title'>Order Summary</Card.Title></Row>
                    <br/>
                    <Row className="order-header">Transaction Details</Row>
                    <Row className="order-content">
                        <Col span={16}>REGULAR SEAT</Col>
                        <Col span={6}>{prices} VND</Col>
                    </Row>
                    <Row className="order-content">
                        <Col span={16}>SERVICE FEES</Col>
                        <Col span={6}>{serviceFee} VND</Col>
                    </Row>
                    <br/>
                    <Row className="order-header">Promo & Voucher</Row>
                    <Row className="order-content">
                        <Col span={16}>PROMO FRESHMEN</Col>
                        <Col span={6}>{voucher} VND</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={16} className="order-header">Total Pay</Col>
                        <Col span={6}>{totalPrice} VND</Col>
                    </Row>
                    <Row>
                        <Col span={16} className="order-header">Payment method</Col>
                        <Col span={6}>See more</Col>
                    </Row>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row><h6 className="reminder-order">*Ticket purchase cannot be cancelled</h6></Row>
                    <br/>
                    <Row>
                        <div className="buy-container">
                            <div className="buy-button"><Link to="/success" ><button type="submit">BUY TICKET</button></Link></div>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Content>
            <Footer />
        </Layout>
    </div>
    )
}
export default Payment;