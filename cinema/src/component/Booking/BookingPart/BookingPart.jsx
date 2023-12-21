import React from "react";
import "./style.css";
import {seats, prices, addprices, addseats, subprices, dropseats, reset, times} from "./const.js"
import { useNavigate } from 'react-router-dom';


function BookingPart() {
    let navigate = useNavigate()
    let handleBooking = () => {
    localStorage.removeItem("accessToken")
    navigate("/PaymentConfirm")
  }
  var color = "rgb(240, 240, 240)";
  var color2 = "rgb(0, 157, 255)"; 
  let handle = () => {
      let btns = document.getElementsByClassName("btn"); 
          for (let i=0; i<btns.length; i++){    
              btns[i].addEventListener("click", function () {    
                  let buttonStyle = getComputedStyle(this);
                  let buttonColor =  buttonStyle["backgroundColor"];
                  if (buttonColor == color) {btns[i].style.backgroundColor = color2; addprices(); addseats(" " + btns[i].textContent);}
                  else {btns[i].style.backgroundColor = color  ; subprices(); dropseats(" " + btns[i].textContent);   
              }
              });         
          }
      document.getElementById("seat").innerText = seats.toString();
      document.getElementById("price").innerText = prices + " VND";

  }
  
  function removeItemAll(arr, value) {
  const index = arr.indexOf(value);
      if (index > -1) { 
      arr.splice(index, 1); 
  }
}  
  
  
  return (
    
  <div className='container3'>
    <div class="text-wrapper">SELECT A SEAT</div>
  <p class="p">Choose the seat you will  occupy during the film screening</p>
  <div class="seat-status">
      <div class="div-2">
          <div class="rectangle"></div>
          <div class="text-wrapper-8">Reserved</div>
      </div>
      <div class="div-2">
          <div class="rectangle-2"></div>
          <div class="text-wrapper-8">Empty Seat</div>
      </div>
      <div class="div-2">
          <div class="rectangle-3"></div>
          <div class="text-wrapper-8">Selected</div>
      </div>
  </div>
      <div class="time-picker">
          <img class="img" src={require('../BookingPart/img/clock.png')}/>
          <div class="base-selection">
              <div class="bioskop">{times}</div>
          </div>
      </div>
      <div class="seats-picker">
          <button class="btn seats-input" onClick={handle}><div class="text-wrapper-2">A1</div></button>
          <button class="btn seats-input-0" onClick={handle}><div class="text-wrapper-2">A2</div></button>
          <button class="btn seats-input-1" onClick={handle}><div class="text-wrapper-2">A3</div></button>
          <button class="btn seats-input-2" onClick={handle}><div class="text-wrapper-2">A4</div></button>
          <button class="btn seats-input-3" onClick={handle}><div class="text-wrapper-2">A5</div></button>
          <button class="btn seats-input-4" onClick={handle}><div class="text-wrapper-2">A6</div></button>
          <button class="btn seats-input-5" onClick={handle}><div class="text-wrapper-2">A7</div></button>
          <button class="btn seats-input-6" onClick={handle}><div class="text-wrapper-2">A8</div></button>
          <button class="btn seats-input-7" onClick={handle}><div class="text-wrapper-2">A9</div></button>
          <button class="btn seats-input-8" onClick={handle}><div class="text-wrapper-2">A10</div></button>
          <button class="btn seats-input-9" onClick={handle}><div class="text-wrapper-2">B1</div></button>
          <button class="btn seats-input-10" onClick={handle}><div class="text-wrapper-2">B2</div></button>
          <button class="btn seats-input-11" onClick={handle}><div class="text-wrapper-2">B3</div></button>
          <button class="btn seats-input-12" onClick={handle}><div class="text-wrapper-2">B4</div></button>
          <button class="btn seats-input-13" onClick={handle}><div class="text-wrapper-2">B5</div></button>
          <button class="btn seats-input-14" onClick={handle}><div class="text-wrapper-2">B6</div></button>
          <button class="btn seats-input-15" onClick={handle}><div class="text-wrapper-2">B7</div></button>
          <button class="btn seats-input-16" onClick={handle}><div class="text-wrapper-2">B8</div></button>
          <button class="btn seats-input-17" onClick={handle}><div class="text-wrapper-2">B9</div></button>
          <button class="btn seats-input-18" onClick={handle}><div class="text-wrapper-2">B10</div></button>
          <button class="btn seats-input-19" onClick={handle}><div class="text-wrapper-2">C1</div></button>
          <button class="btn seats-input-20" onClick={handle}><div class="text-wrapper-2">C2</div></button>
          <button class="btn seats-input-21" onClick={handle}><div class="text-wrapper-2">C3</div></button>
          <button class="btn seats-input-22" onClick={handle}><div class="text-wrapper-2">C4</div></button>
          <button class="btn seats-input-23" onClick={handle}><div class="text-wrapper-2">C5</div></button>
          <button class="btn seats-input-24" onClick={handle}><div class="text-wrapper-2">C6</div></button>
          <button class="btn seats-input-25" onClick={handle}><div class="text-wrapper-2">C7</div></button>
          <button class="btn seats-input-26" onClick={handle}><div class="text-wrapper-2">C8</div></button>
          <button class="btn seats-input-27" onClick={handle}><div class="text-wrapper-2">C9</div></button>
          <button class="btn seats-input-28" onClick={handle}><div class="text-wrapper-2">D1</div></button>
          <button class="btn seats-input-29" onClick={handle}><div class="text-wrapper-2">D2</div></button>
          <button class="btn seats-input-30" onClick={handle}><div class="text-wrapper-2">D3</div></button>
          <button class="btn seats-input-31" onClick={handle}><div class="text-wrapper-2">D4</div></button>
          <button class="btn seats-input-32" onClick={handle}><div class="text-wrapper-2">D5</div></button>
          <button class="btn seats-input-33" onClick={handle}><div class="text-wrapper-2">D6</div></button>
          <button class="btn seats-input-34" onClick={handle}><div class="text-wrapper-2">D7</div></button>
          <button class="btn seats-input-35" onClick={handle}><div class="text-wrapper-2">D8</div></button>
          <button class="btn seats-input-36" onClick={handle}><div class="text-wrapper-2">D9</div></button>
          <button class="btn seats-input-37" onClick={handle}><div class="text-wrapper-2">D10</div></button>
          <button class="btn seats-input-38" onClick={handle}><div class="text-wrapper-2">C10</div></button>
          <button class="btn seats-input-39" onClick={handle}><div class="text-wrapper-2">E1</div></button>
          <button class="btn seats-input-40" onClick={handle}><div class="text-wrapper-2">E2</div></button>
          <button class="btn seats-input-41" onClick={handle}><div class="text-wrapper-2">E3</div></button>
          <button class="btn seats-input-42" onClick={handle}><div class="text-wrapper-2">E4</div></button>
          <button class="btn seats-input-43" onClick={handle}><div class="text-wrapper-2">E5</div></button>
          <button class="btn seats-input-44" onClick={handle}><div class="text-wrapper-2">E6</div></button>
          <button class="btn seats-input-45" onClick={handle}><div class="text-wrapper-2">E7</div></button>
          <button class="btn seats-input-46" onClick={handle}><div class="text-wrapper-2">E8</div></button>
          <button class="btn seats-input-47" onClick={handle}><div class="text-wrapper-2">E9</div></button>
          <button class="btn seats-input-48" onClick={handle}><div class="text-wrapper-2">E10</div></button>
          <button class="btn seats-input-49" onClick={handle}><div class="text-wrapper-2">F1</div></button>
          <button class="btn seats-input-50" onClick={handle}><div class="text-wrapper-2">F2</div></button>
          <button class="btn seats-input-51" onClick={handle}><div class="text-wrapper-2">F3</div></button>
          <button class="btn seats-input-52" onClick={handle}><div class="text-wrapper-2">F4</div></button>
          <button class="btn seats-input-53" onClick={handle}><div class="text-wrapper-2">F5</div></button>
          <button class="btn seats-input-54" onClick={handle}><div class="text-wrapper-2">F6</div></button>
          <button class="btn seats-input-55" onClick={handle}><div class="text-wrapper-2">F7</div></button>
          <button class="btn seats-input-56" onClick={handle}><div class="text-wrapper-2">F8</div></button>
          <button class="btn seats-input-57" onClick={handle}><div class="text-wrapper-2">F9</div></button>
          <button class="btn seats-input-58" onClick={handle}><div class="text-wrapper-2">F10</div></button>
          <button class="btn seats-input-59" onClick={handle}><div class="text-wrapper-2">G1</div></button>
          <button class="btn seats-input-60" onClick={handle}><div class="text-wrapper-2">G2</div></button>
          <button class="btn seats-input-61" onClick={handle}><div class="text-wrapper-2">G3</div></button>
          <button class="btn seats-input-62" onClick={handle}><div class="text-wrapper-2">G4</div></button>
          <button class="btn seats-input-63" onClick={handle}><div class="text-wrapper-2">G5</div></button>
          <button class="btn seats-input-64" onClick={handle}><div class="text-wrapper-2">G6</div></button>
          <button class="btn seats-input-65" onClick={handle}><div class="text-wrapper-2">G7</div></button>
          <button class="btn seats-input-66" onClick={handle}><div class="text-wrapper-2">G8</div></button>
          <button class="btn seats-input-67" onClick={handle}><div class="text-wrapper-2">G9</div></button>
          <button class="btn seats-input-68" onClick={handle}><div class="text-wrapper-2">G10</div></button>
          <button class="btn seats-input-69" onClick={handle}><div class="text-wrapper-2">H1</div></button>
          <button class="btn seats-input-70" onClick={handle}><div class="text-wrapper-2">H2</div></button>
          <button class="btn seats-input-71" onClick={handle}><div class="text-wrapper-2">H3</div></button>
          <button class="btn seats-input-72" onClick={handle}><div class="text-wrapper-2">H4</div></button>
          <button class="btn seats-input-73" onClick={handle}><div class="text-wrapper-2">H5</div></button>
          <button class="btn seats-input-74" onClick={handle}><div class="text-wrapper-2">H6</div></button>
          <button class="btn seats-input-75" onClick={handle}><div class="text-wrapper-2">H7</div></button>
          <button class="btn seats-input-76" onClick={handle}><div class="text-wrapper-2">H8</div></button>
          <button class="btn seats-input-77" onClick={handle}><div class="text-wrapper-2">H9</div></button>
          <button class="btn seats-input-78" onClick={handle}><div class="text-wrapper-2">H10</div></button>
          <button class="btn seats-input-79" onClick={handle}><div class="text-wrapper-2">A11</div></button>
          <button class="btn seats-input-80" onClick={handle}><div class="text-wrapper-2">A12</div></button>
          <button class="btn seats-input-81" onClick={handle}><div class="text-wrapper-2">A13</div></button>
          <button class="btn seats-input-82" onClick={handle}><div class="text-wrapper-2">A14</div></button>
          <button class="btn seats-input-83" onClick={handle}><div class="text-wrapper-2">A15</div></button>
          <button class="btn seats-input-84" onClick={handle}><div class="text-wrapper-2">A16</div></button>
          <button class="btn seats-input-85" onClick={handle}><div class="text-wrapper-2">A17</div></button>
          <button class="btn seats-input-86" onClick={handle}><div class="text-wrapper-2">A18</div></button>
          <button class="btn seats-input-87" onClick={handle}><div class="text-wrapper-2">A19</div></button>
          <button class="btn seats-input-88" onClick={handle}><div class="text-wrapper-2">A20</div></button>
          <button class="btn seats-input-89" onClick={handle}><div class="text-wrapper-2">B11</div></button>
          <button class="btn seats-input-90" onClick={handle}><div class="text-wrapper-2">B12</div></button>
          <button class="btn seats-input-91" onClick={handle}><div class="text-wrapper-2">B13</div></button>
          <button class="btn seats-input-92" onClick={handle}><div class="text-wrapper-2">B14</div></button>
          <button class="btn seats-input-93" onClick={handle}><div class="text-wrapper-2">B15</div></button>
          <button class="btn seats-input-94" onClick={handle}><div class="text-wrapper-2">B16</div></button>
          <button class="btn seats-input-95" onClick={handle}><div class="text-wrapper-2">B17</div></button>
          <button class="btn seats-input-96" onClick={handle}><div class="text-wrapper-2">B18</div></button>
          <button class="btn seats-input-97" onClick={handle}><div class="text-wrapper-2">B19</div></button>
          <button class="btn seats-input-98" onClick={handle}><div class="text-wrapper-2">B20</div></button>
          <button class="btn seats-input-99" onClick={handle}><div class="text-wrapper-2">C11</div></button>
          <button class="btn seats-input-100" onClick={handle}><div class="text-wrapper-2">C12</div></button>
          <button class="btn seats-input-101" onClick={handle}><div class="text-wrapper-2">C13</div></button>
          <button class="btn seats-input-102" onClick={handle}><div class="text-wrapper-2">C14</div></button>
          <button class="btn seats-input-103" onClick={handle}><div class="text-wrapper-2">C15</div></button>
          <button class="btn seats-input-104" onClick={handle}><div class="text-wrapper-2">C16</div></button>
          <button class="btn seats-input-105" onClick={handle}><div class="text-wrapper-2">C17</div></button>
          <button class="btn seats-input-106" onClick={handle}><div class="text-wrapper-2">C18</div></button>
          <button class="btn seats-input-107" onClick={handle}><div class="text-wrapper-2">C19</div></button>
          <button class="btn seats-input-108" onClick={handle}><div class="text-wrapper-2">C20</div></button>
          <button class="btn seats-input-109" onClick={handle}><div class="text-wrapper-2">D11</div></button>
          <button class="btn seats-input-110" onClick={handle}><div class="text-wrapper-2">D12</div></button>
          <button class="btn seats-input-111" onClick={handle}><div class="text-wrapper-2">D13</div></button>
          <button class="btn seats-input-112" onClick={handle}><div class="text-wrapper-2">D14</div></button>
          <button class="btn seats-input-113" onClick={handle}><div class="text-wrapper-2">D15</div></button>
          <button class="btn seats-input-114" onClick={handle}><div class="text-wrapper-2">D16</div></button>
          <button class="btn seats-input-115" onClick={handle}><div class="text-wrapper-2">D17</div></button>
          <button class="btn seats-input-116" onClick={handle}><div class="text-wrapper-2">D18</div></button>
          <button class="btn seats-input-117" onClick={handle}><div class="text-wrapper-2">D19</div></button>
          <button class="btn seats-input-118" onClick={handle}><div class="text-wrapper-2">D20</div></button>
          <button class="btn seats-input-119" onClick={handle}><div class="text-wrapper-2">E11</div></button>
          <button class="btn seats-input-120" onClick={handle}><div class="text-wrapper-2">E12</div></button>
          <button class="btn seats-input-121" onClick={handle}><div class="text-wrapper-2">E13</div></button>
          <button class="btn seats-input-122" onClick={handle}><div class="text-wrapper-2">E14</div></button>
          <button class="btn seats-input-123" onClick={handle}><div class="text-wrapper-2">E15</div></button>
          <button class="btn seats-input-124" onClick={handle}><div class="text-wrapper-2">E16</div></button>
          <button class="btn seats-input-125" onClick={handle}><div class="text-wrapper-2">E17</div></button>
          <button class="btn seats-input-126" onClick={handle}><div class="text-wrapper-2">E18</div></button>
          <button class="btn seats-input-127" onClick={handle}><div class="text-wrapper-2">E19</div></button>
          <button class="btn seats-input-128" onClick={handle}><div class="text-wrapper-2">E20</div></button>
          <button class="btn seats-input-129" onClick={handle}><div class="text-wrapper-2">F11</div></button>
          <button class="btn seats-input-130" onClick={handle}><div class="text-wrapper-2">F12</div></button>
          <button class="btn seats-input-131" onClick={handle}><div class="text-wrapper-2">F13</div></button>
          <button class="btn seats-input-132" onClick={handle}><div class="text-wrapper-2">F14</div></button>
          <button class="btn seats-input-133" onClick={handle}><div class="text-wrapper-2">F15</div></button>
          <button class="btn seats-input-134" onClick={handle}><div class="text-wrapper-2">F16</div></button>
          <button class="btn seats-input-135" onClick={handle}><div class="text-wrapper-2">F17</div></button>
          <button class="btn seats-input-136" onClick={handle}><div class="text-wrapper-2">F18</div></button>
          <button class="btn seats-input-137" onClick={handle}><div class="text-wrapper-2">F19</div></button>
          <button class="btn seats-input-138" onClick={handle}><div class="text-wrapper-2">F20</div></button>
          <button class="btn seats-input-139" onClick={handle}><div class="text-wrapper-2">G11</div></button>
          <button class="btn seats-input-140" onClick={handle}><div class="text-wrapper-2">G12</div></button>
          <button class="btn seats-input-141" onClick={handle}><div class="text-wrapper-2">G13</div></button>
          <button class="btn seats-input-142" onClick={handle}><div class="text-wrapper-2">G14</div></button>
          <button class="btn seats-input-143" onClick={handle}><div class="text-wrapper-2">G15</div></button>
          <button class="btn seats-input-144" onClick={handle}><div class="text-wrapper-2">G16</div></button>
          <button class="btn seats-input-145" onClick={handle}><div class="text-wrapper-2">G17</div></button>
          <button class="btn seats-input-146" onClick={handle}><div class="text-wrapper-2">G18</div></button>
          <button class="btn seats-input-147" onClick={handle}><div class="text-wrapper-2">G19</div></button>
          <button class="btn seats-input-148" onClick={handle}><div class="text-wrapper-2">G20</div></button>
          <button class="btn seats-input-149" onClick={handle}><div class="text-wrapper-2">H11</div></button>
          <button class="btn seats-input-150" onClick={handle}><div class="text-wrapper-2">H12</div></button>
          <button class="btn seats-input-151" onClick={handle}><div class="text-wrapper-2">H13</div></button>
          <button class="btn seats-input-152" onClick={handle}><div class="text-wrapper-2">H14</div></button>
          <button class="btn seats-input-153" onClick={handle}><div class="text-wrapper-2">H15</div></button>
          <button class="btn seats-input-154" onClick={handle}><div class="text-wrapper-2">H16</div></button>
          <button class="btn seats-input-155" onClick={handle}><div class="text-wrapper-2">H17</div></button>
          <button class="btn seats-input-156" onClick={handle}><div class="text-wrapper-2">H18</div></button>
          <button class="btn seats-input-157" onClick={handle}><div class="text-wrapper-2">H19</div></button>
          <button class="btn seats-input-158" onClick={handle}><div class="text-wrapper-2">H20</div></button>
      </div>
      <div class="layar-bioskop"><div class="text-wrapper-3">Cinema Screen Here</div></div>
     <div className="confirm-footer">
        <div class="text-wrapper-4">Total</div>
        <div class="text-wrapper-5">Chair</div>
        <div class="text-wrapper-6" id="price">0 VND</div>
        <div class="seat"><div class="text-wrapper-7" id="seat"> </div></div>

        <div className='background-booking'><button className='booking' onClick={handleBooking}>Booking Now</button></div>
     </div>
  </div>    
  )

}

export default BookingPart  