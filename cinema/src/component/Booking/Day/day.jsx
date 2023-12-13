// Import necessary React components and libraries
import { Row } from 'antd';
// import { SmoothHorizontalScrolling } from '../Content/utils';
import React, { useState } from 'react';
import { useRef } from 'react'; 
import './style.css'
import { SmoothHorizontalScrolling } from '../../Content/utils';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons';

// Sample data representing thge schedule
const scheduleData = [
  { id: 1, time: '15 OCT SUN', available: true },
  { id: 2, time: '16 OCT MON', available: true },
  { id: 3, time: '17 OCT TUE', available: true },
  { id: 4, time: '18 OCT WED', available: true },
  { id: 5, time: '19 OCT THU', available: true },
  { id: 6, time: '20 OCT FRI', available: true },
  { id: 7, time: '21 OCT STA', available: true },
  // Add more schedule data as needed
];

// CinemaSchedule component to display the booking schedule
const CinemaSchedule = ({ onSelectTime }) => {
  return (
    <div>
      <Row className='data'>
        {scheduleData.map((slot) => (
          <p key={slot.id}>
            <button 
              className='btn-day'
              onClick={() => onSelectTime(slot)}
              disabled={!slot.available}
            >
              {slot.time}
            </button>
          </p>
        ))}
      </Row>
    </div>
  );
};

// BookingForm component to handle user input and booking
const BookingForm = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelectTime = (slot) => {
    setSelectedTime(slot);
  };

  const handleBookNow = () => {
    if (selectedTime) {
      // Implement your booking logic here
      alert(`Booking confirmed for ${selectedTime.time}`);
    } else {
      alert('Please select a time slot');
    }
  };

  return (
    <div>
      <p>Selected Day: {selectedTime ? selectedTime.time : 'None'}</p>
      <CinemaSchedule onSelectTime={handleSelectTime} />
    </div>
  );
};

// Main App component
const Day = () => {
    const sliderRef = useRef()
const movieRef = useRef()
const handleScrollRight = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if(sliderRef.current.scrollLeft < maxScrollLeft){
      SmoothHorizontalScrolling(sliderRef.current,
        250,
        movieRef.current.clientWidth * 4,
        sliderRef.current.scrollLeft)
    }
  }
  const handleScrollLeft = () => {
    if(sliderRef.current.scrollLeft > 0){
      SmoothHorizontalScrolling(sliderRef.current,
        250,
        - movieRef.current.clientWidth * 4,
        sliderRef.current.scrollLeft)
    }
  }
  return (
    <div className='content-board'>
      <h1 className='title-name'>Cinema Booking System</h1>
      
      <BookingForm />
        
    </div>
  );
};

export default Day;