import React, { useState } from 'react'
import Navigation from '../Header'
import Footer from '../Footer/Footer'
import "./style.css"
import { Col, Row} from 'antd';
import { Layout } from 'antd'
import { useToken } from 'antd/es/theme/internal';
import axios from 'axios';
const { Header, Content } = Layout;
function SignUp() {

    const [phone , setPhone] = useState("");
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");



    // const inputUsername = document.querySelector(".text-username");
    // const inputPassword = document.querySelector(".text-password");
    // const btnLogin = document.querySelector(".login");
    // btnLogin.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   if (inputUsername.value === "" || inputPassword.value === "") {
    //     alert("vui lòng không để trống");
    //   } else {
    //     const user = JSON.parse(localStorage.getItem(inputUsername.value));
    //     if (
    //       user.username === inputUsername.value &&
    //       user.password === inputPassword.value
    //     ) {
    //       alert("login successful");
    //       window.location.href = "";
    //     } else {
    //       alert("login fail");
    //     }
    //   }
    // });

    return(
        
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
                <div className="login-container">
                <div className="title">Sign up your account</div> 
                    <div className="username">Your phone number</div>
                    <input type="text-phone" placeholder="Enter your phone number..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>

                    <div className="username">Your name</div>
                    <input type="text-username" placeholder="Email or username..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>

                    <div className="username">Username</div>
                    <input type="text-username" placeholder="Email or username..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>
                    
                    <div className="password">Password</div>
                    <input type="text-password" placeholder="Password..."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className='button'>
                        {/* <button className='login' >Sign In</button> */}
                        <button className='signup'>Sign Up</button>
                    </div>
            </Content>
            <Footer />
            </Layout>
            
        </div>
    )
}
export default SignUp   ;