import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import {Button} from "antd"
import {Link, useNavigate} from "react-router-dom"
import "./style.css"
function Navigation() {
  let navigate = useNavigate()
  let handleLogout = () => {
    localStorage.removeItem("accessToken")
    navigate("/login")
  }
  let handleLogin = () => {
    localStorage.setItem("accessToken", true)
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
          <p><Button onClick={handleLogin}>Log In</Button></p>
          <p><Button onClick={handleLogout}>Sign Up</Button></p>
        </div>
    </div>
  )
}

export default Navigation