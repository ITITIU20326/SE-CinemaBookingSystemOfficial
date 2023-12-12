import React from 'react'
import Trending from './Trending/Trending'
import { useState, useEffect } from 'react';
import TVTopRated from './TV Top Rated/TVTopRated';
import WhatPopular from './What\'s Popular/WhatPopular';



function MoviesRow() {
  const API_TRENDING="https://api.themoviedb.org/3/trending/all/day?api_key=9b00e03c6d53581effb063d999d11128";
  const API_TVTOPRATED = "https://api.themoviedb.org/3/tv/top_rated?api_key=9b00e03c6d53581effb063d999d11128&language=en-US&page=1"
  const API_WHATPOPULAR = "https://api.themoviedb.org/3/tv/popular?api_key=9b00e03c6d53581effb063d999d11128&language=en-US&page=1"
    const [movies, setMovies] = useState([]);
    const [similarTVShow, setSimilarTVShow] = useState([]);
    const [whatpopular, setWhatpopular] = useState([]);
    // const [data, setData] = useState({
    //     posterpath: "",
    //     moviename: ""
    // });
    const fetchMovie = (api) => {
      fetch(api)
        .then((res)=>res.json())
        .then(response=>{
          // console.log(response);
          return response.results
          //setMovies(response.results)
        })
    }
    useEffect(() => {
        fetch(API_TRENDING)
        .then((res)=>res.json())
        .then(response=>{
          // console.log(response);
          setMovies(response.results)
        
        })
        
        // const data = fetchMovie(API_TRENDING)
        // console.log(data)
        // data && setMovies(data)
      }, [])
    useEffect(() => {
      fetch(API_TVTOPRATED)
      .then((res)=>res.json())
      .then(response=>{
        setSimilarTVShow(response.results)
        })
    }, [])

    useEffect(() => {
      fetch(API_WHATPOPULAR)
      .then((res)=>res.json())
      .then(response=>{
        setWhatpopular(response.results)
        })
    }, [])

  return (
    <div>
        {/* {movies.map((movie) => (
            // <Trending movies={movies} title="Trending"/>
            <Trending key={movie.id} movies={movie} title={movie.title}></Trending>
        ))} */}
        <Trending data={movies}/>
        <TVTopRated data={similarTVShow ? similarTVShow : []} />
        <WhatPopular data={whatpopular}/>

    </div>
  )
}

export default MoviesRow