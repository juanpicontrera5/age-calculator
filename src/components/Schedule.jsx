import { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Schedule() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (date) => {
    setSelectedDate(date);
  };

    console.log(selectedDate);
    

  return <DatePicker selected={selectedDate} onChange={handleChange} className="calendarCustom"/>; 

}
