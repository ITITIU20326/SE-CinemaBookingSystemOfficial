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
          <p>Movies</p>
          <p>TV Shows</p>
          <p><Link to={"/people"} style={{color: "white"}}>People</Link></p>
          <p>More</p>
        </div>
        <div className="navright">
          <p><button onClick={handleLogin}>Sign In</button></p>
          <p><button onClick={handleLogout}>Sign Up</button></p>
        </div>
    </div>
  )
}

export default Navigation