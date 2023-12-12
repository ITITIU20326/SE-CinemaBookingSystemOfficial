import HomePage from "./component/HomePage";
import Search from "./component/Search/Search";
import { useState } from "react";

import {Routes, Route, redirect } from "react-router-dom"
import DetailMovie from "./component/DetailMovie/DetailMovie";
import DetailPeople from "./component/DetailPeople/DetailPeople";
import Login from "./component/Login";
import Private from "./component/Private";
import PopularPeople from "./component/Popular People/PopularPeople";
import BookingScreen from "./component/Booking/BookingScreen";
function App() {
  // const [token, setToken] = useState()
  //   if(!token){
  //       return <Login setToken = {setToken}/>
  //   }
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={token ? <HomePage /> : redirect("/")} /> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/movie/:id" element={<DetailMovie/>}/>
        <Route path="/person/:id" element={<DetailPeople/>}/>
        <Route path="/people" element={<PopularPeople/>}/>
        <Route path="/booking" element={<BookingScreen/>}/>
        {/* <Route path="/private" element={localStorage.getItem("accessToken") ? <Private /> : redirect("/login")} /> */}
        {/* <Route path="/private" element={token ? <Private /> : redirect("/login")} /> */}
      </Routes>
    </div>
  );
}

export default App;
