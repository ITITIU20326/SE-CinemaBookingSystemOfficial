// Import necessary React components and libraries
import React, { useState } from 'react';

// Sample data representing the schedule
const scheduleData = [
  { id: 1, time: '10:00 AM', available: true },
  { id: 2, time: '1:00 PM', available: false },
  { id: 3, time: '4:00 PM', available: true },
  { id: 4, time: '10:00 AM', available: true },
  { id: 5, time: '1:00 PM', available: false },
  { id: 6, time: '4:00 PM', available: true },
  { id: 7, time: '10:00 AM', available: true },
  { id: 8, time: '1:00 PM', available: false },
  { id: 9, time: '4:00 PM', available: true },
  { id: 10, time: '10:00 AM', available: true },
  { id: 11, time: '1:00 PM', available: false },
  { id: 12, time: '4:00 PM', available: true },
  // Add more schedule data as needed
];

// CinemaSchedule component to display the booking schedule
const CinemaSchedule = ({ onSelectTime }) => {
  return (
    <div>
      <h2>Movie Schedule</h2>
      <ul>
        {scheduleData.map((slot) => (
          <li key={slot.id}>
            <button
              onClick={() => onSelectTime(slot)}
              disabled={!slot.available}
            >
              {slot.time}
            </button>
          </li>
        ))}
      </ul>
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
      <h2>Booking Form</h2>
      <p>Selected Time: {selectedTime ? selectedTime.time : 'None'}</p>
      <button onClick={handleBookNow}>Book Now</button>
      <CinemaSchedule onSelectTime={handleSelectTime} />
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <h1>Cinema Booking System</h1>
      <BookingForm />
    </div>
  );
};

export default App;