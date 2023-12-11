import React, { useState } from 'react'
import Navigation from '../Header'
import Footer from '../Footer/Footer'
import "./style.css"
import { Col, Row} from 'antd';
import { Layout } from 'antd'
import { useToken } from 'antd/es/theme/internal';
import axios from 'axios';
import meo from '../../assects/img/meo.png';
const { Header, Content } = Layout;

const paymentsuccess = () => {
  return (
<div className="">
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
             <div className='full-card'>
             <p className='header'>Payment successful!</p>
            <div className="img-meo">
              <img src={meo}></img>
            </div>
            <p className="status">Transaction details have been sent to your email, you can also check other <br/>ticket details in my ticket either on the website or on your smartphone.</p>
            <a href='/'><button className='home-button'>Home</button></a>
             </div>
             
            </Content>
            <Footer />
            </Layout>
            </div>
  )
}

export default paymentsuccess;