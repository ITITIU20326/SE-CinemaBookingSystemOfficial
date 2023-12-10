import React from 'react'
import "./style.css"
import {Layout} from "antd"
import { Col, Row } from 'antd';
import Navigation from '../Header';
import Footer from '../Footer/Footer';
import ContentSearch from './Content Search/ContentSearch';

const { Header, Content } = Layout;

function Search() {
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
                  <ContentSearch />
                </Col>
                <Col span={2}/>
              </Row>
            </Content>
            <Footer />
        </Layout>
    </div>
  )
}

export default Search