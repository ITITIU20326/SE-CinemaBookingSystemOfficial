import React from 'react'
import {Layout} from "antd"
import { Col, Row } from 'antd';
import Navigation from './Header';
import Slider from './Content/Slider/Slider';
import MoviesRow from './Content/MoviesRow';
import Footer from './Footer/Footer';

const { Header, Content } = Layout;

function HomePage() {
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
                <Col span={2}/>
                <Col span={20}>
                  <Slider />
                  <MoviesRow />
                  {/* <SimilarTVShows /> */}
                </Col>
                <Col span={2}/>
              </Row>
            </Content>
            {/* <Footer> */}
              <Footer />
            {/* </Footer> */}
        </Layout>
    </div>
  )
}

export default HomePage