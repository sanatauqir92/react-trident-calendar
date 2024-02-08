import React from 'react';
import CalendarItem from './CalendarItem';
import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="Calendar">
      <p className="Cal-header">Calendar</p>
      <CalendarItem/>
    </div>
    )
}

export default Calendar;