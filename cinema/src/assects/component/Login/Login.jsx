import React, { useState } from 'react'
import Navigation from '../Header'
import Footer from '../Footer/Footer'
import "./style.css"
import { Col, Row} from 'antd';
import { Layout } from 'antd'
import { useToken } from 'antd/es/theme/internal';
import axios from 'axios';
const { Header, Content } = Layout;
function Login() {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginApi = (email, password) => {
      return axios.post("/api/login", {email, password});
    }
    const handleLogin = async () => {
      if(!email || !password){
        console.error("Email/Password is required");
      }

      let res = await loginApi(email, password);
      if(res && res.token) {
        localStorage.setItem("token", res.token);
      }
    }
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
                    <div className="title">Login to your account</div>  
                    <div className="des1-title">In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. Click here to get started.
                    </div>
                    <div className="des2-title">If you signed up but didn't get your verification email, click here to have it resent.</div>
                    <div className="text">Username</div>
                    <input type="text" placeholder="Email or username..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>
                    
                    <div className="text">Password</div>
                    <input type="text" placeholder="Password..."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className='button'>
                        <button className='login' onClick={()=> handleLogin()}>Login</button>
                        <button className='register'>Register</button>
                    </div>
            </Content>
            <Footer />
            </Layout>
            
        </div>
    )
}
export default Login;