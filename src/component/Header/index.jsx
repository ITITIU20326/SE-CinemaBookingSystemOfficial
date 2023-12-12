import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import {Button} from "antd" 
import {Link, useNavigate} from "react-router-dom"
import "./style.css"
function Navigation() {
  let navigate = useNavigate()
  let handle = () => {
    navigate("/booking")
  }
  let handleLogout = () => {
    // localStorage.removeItem("accessToken")
    // navigate("/login")
  }
  let handleLogin = () => {
    // localStorage.setItem("accessToken", true)
    // navigate("/login")
  }
  let handlePrivate = () => {
    
  }

  return (
    <div className='container'>
        <div className="navleft">
          <p><Link to="/" className='logo'>TMDB</Link></p>
          <p>Movies</p>
          <p>TV Shows</p>
          <p><Link to={"/people"} style={{color: "white"}}>People</Link></p>
          <p><Link to={"/booking"} style={{color: "white"}}>More</Link></p>
          {/* <p><Button onClick={handlePrivate}>Private</Button></p> */}
          {/* <p><Link to={"/private"}>Private</Link></p> */}
        </div>
        <div className="navright">
          <p><Button>Login</Button></p>
          <p><Button onClick={handleLogout}>Logout</Button></p>
          <p><Link to="/search" ><SearchOutlined /></Link></p>
        </div>
    </div>
  )
}

export default Navigation