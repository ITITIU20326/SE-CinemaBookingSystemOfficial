// Import necessary React components and libraries
import { Row } from 'antd';
import React, { useState } from 'react';
import './style.css'

// Sample data representing the schedule
const scheduleData = [
  { id: 1, time: '1:00 AM', available: true },
  { id: 2, time: '2:00 PM', available: true },
  { id: 3, time: '3:00 PM', available: true },
  { id: 4, time: '4:00 AM', available: true },
  { id: 5, time: '5:00 PM', available: true }
  // Add more schedule data as needed
];
const scheduleData2 = [

  { id: 6, time: '6:00 PM', available: true },
  { id: 7, time: '7:00 AM', available: true },
  { id: 8, time: '8:00 PM', available: true },
  { id: 9, time: '9:00 PM', available: true },
  { id: 10, time: '10:00 PM', available: true },
  // Add more schedule data as needed
];

// CinemaSchedule component to display the booking schedule
const CinemaSchedule = ({ onSelectTime }) => {
  return (
    <div>

      <Row>
        {scheduleData.map((slot) => (
          <p key={slot.id}>
            <button
              className='btn-time'
              onClick={() => onSelectTime(slot)}
              disabled={!slot.available}
            >
              {slot.time}
            </button>
          </p>
        ))}
      </Row>
      <Row>
        {scheduleData2.map((slot) => (
          <p key={slot.id}>
            <button
              className='btn-time'
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
    <div className='content-board'>
      <p>Selected Time: {selectedTime ? selectedTime.time : 'None'}</p>
      <CinemaSchedule onSelectTime={handleSelectTime} />
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

// Main App component
const Time = () => {
  return (
    <div>
      <BookingForm />
    </div>
  );
};

export default Time;
