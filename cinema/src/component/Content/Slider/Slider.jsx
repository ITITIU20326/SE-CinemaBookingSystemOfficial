import React from 'react'
import "./style.css"
import {Input, Button, Form} from "antd"
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'


function Slider() {
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  const searchMovie = async()=>{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=9b00e03c6d53581effb063d999d11128&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
}

  const handleChange=(e)=>{
      setQuery(e.target.value);
  }

  return (
    <div className='slider'>
        <div className="slider-all">
          <div className="slider-body">
              <h1>Welcome.</h1>
              <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
              <Form className="slider-search"  
                // onFinish={searchMovie}
              >
                  <Input.Group compact  style={{paddingTop: 40}}>
                    <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Search for a movie, tv shows, person, ..."
                     size="large"
                     value={query} onChange={handleChange}
                    />
                    <Button type="primary" size='large' onClick={searchMovie}><Link to={`/search/${query}`}>Search</Link></Button>
                  </Input.Group>
              </Form>
          </div>
        </div>
    </div>
  )
}

export default Slider
