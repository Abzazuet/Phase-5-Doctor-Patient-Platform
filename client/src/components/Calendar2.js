import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Calendar2() {
  const [value, onChange] = useState(new Date());
    console.log(value)
  return (
    <div mr={4}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default Calendar2;