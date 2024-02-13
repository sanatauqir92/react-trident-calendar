import React, {useState} from 'react';
import "./CalendarItem.css";
import dummyData from '../dummyInfo';

const isWeekend = (date) => {
  let today = new Date(2024, 0, date);
  let dayOfWeek = today.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6 ? true : false;
}

const CalendarItem = (props) => {
  const [schedule, setSchedule] = useState(dummyData);

  const editInfo = (event, date) => {
    const {value} = event.target;
    setSchedule(prevSchedule => {
      return {
        ...prevSchedule,
        "january": {...prevSchedule.january, [date]: value}
      }
    });
  }

  let wholeMonth = [];

  for (let i=1; i< props.days+1; i++){

    wholeMonth.push(
      <div className="cal-item" style={{"backgroundColor": isWeekend(i) ? '#594685': '#7f65ba'}} key={i}>
        <p className="date">{i}</p>
        <input className="info" type="text" name="info" value={schedule.january[i]} onChange={(event) => editInfo(event, i)}/>
      </div>
    )
  }

  return wholeMonth;
}




export default CalendarItem;