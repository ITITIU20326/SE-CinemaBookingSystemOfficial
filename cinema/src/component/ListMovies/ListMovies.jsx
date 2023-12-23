import React, { useEffect, useState } from 'react'
import {Layout} from "antd"
import { Col, Row, Card, Button, Input } from 'antd';
import Navigation from '../Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

function PopularPeople() {
    const API_TRENDING="https://api.themoviedb.org/3/trending/all/day?api_key=9b00e03c6d53581effb063d999d11128&language=en-US&page=1";
   
    const [page, setPage] = useState('1')
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        fetch(API_TRENDING)
        .then((res)=>res.json())
        .then(data=>{
          setMovies(data.results)
        
        })
      }, [])

    const searchPage = async()=>{
        const url=`https://api.themoviedb.org/3/trending/all/day?api_key=9b00e03c6d53581effb063d999d11128&language=en-US&page=${page}`;
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          setMovies(data.results);
    }

    const handleChange=(e)=>{
        setPage(e.target.value);
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
                <Col span={2}/>
                <Col span={20}>
                    <h1>Movies List</h1>
                    <Row justify={'center'}>
                        <Col>
                            <Card className='content-search' style={{marginTop: 40}}>
                                    <Row className='grid' justify={"center"}>
                                        {movies.map((data) => (
                                                <Col span={5} className='grid-item' key={data.id}>
                                                
                                                    <Link to={`/movie/${data.id}`}><div className='grid-item-data'>
                                                        <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}></img>
                                                        <div>
                                                            <p style={{textAlign: "center"}}>{data.name}</p>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                </Col>
                                        ))}


                                    
                                    </Row>
                                    <Row justify={"center"} style={{marginTop: 20}}>
                                        <Col>
                                            {/* <Space direction="vertical" style={{ width: '100%' }}>
                                                <Button type='primary' onClick={loadMore}>Load More</Button>
                                            </Space> */}
                                            <Input.Group compact>
                                                <Input style={{ width: 'calc(100% - 100px)' }} placeholder="Search for a page"
                                                    size="large"
                                                    value={page} onChange={handleChange}
                                                />
                                                <Button type="primary" size='large' onClick={searchPage}>Search</Button>
                                            </Input.Group>
                                        </Col>
                                    </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={2}/>
              </Row>
            </Content>
            <Footer />
        </Layout>
    </div>
  )
}

export default PopularPeople