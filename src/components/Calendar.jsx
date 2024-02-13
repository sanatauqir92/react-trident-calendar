import React from 'react';
import CalendarItem from './CalendarItem';
import "./Calendar.css";

const Calendar = () => {

  return (
    <div className="calendar">
      <p className="cal-header">Calendar</p>
      <header className="cal-month">January</header>
      <CalendarItem days={31}/>
    </div>
    )
}

export default Calendar;