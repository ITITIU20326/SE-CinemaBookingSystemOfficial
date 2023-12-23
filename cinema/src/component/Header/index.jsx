import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./style.css"
function Navigation() {
  let navigate = useNavigate()
  let handleLogout = () => {
    navigate("/signup")
  }
  let handleLogin = () => {
    navigate("/login")
  }
  return (
    <div className='container'>
        <div className="navleft">
          <p><Link to="/" className='logo'>TMDB</Link></p>
          <p><Link to={"/listmovies"} style={{color: "white"}}>Movies</Link></p>
          <p className='tvshows'><Link to={""}></Link>TV Shows</p>
          <p className='people'><Link to={"/people"} style={{color: "white"}}>People</Link></p>
          <p className='more'>More</p>
        </div>
        <div className="navright">
          <button className="header-button1" onClick={handleLogin} >Sign In</button>
          <button className="header-button2" onClick={handleLogout}>Sign Up</button>
        </div>
    </div>
  )
}

export default Navigation