import React, { useState } from "react";
//import { render } from "react-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div class=" mr-5" width="100%">
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {/* {date.toString()} */}
    </div>
  );
};


export default ReactCalendar;
