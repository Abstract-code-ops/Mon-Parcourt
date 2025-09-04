// components/blog/CalendarWidget.js
"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Imports the default styling

export default function CalendarWidget() {
  // Set up state to hold the selected date. Default to the current date.
  const [date, setDate] = useState(new Date());

  // This function is called when the user clicks a date
  const onChange = (newDate) => {
    setDate(newDate);
    // You can add logic here to do something with the selected date,
    // like filtering posts or navigating to a specific day's archive.
    console.log(newDate);
  };

  return (
    <div className="sidebar-widget calendar-widget">
      <div className="widget-title">
        <h3>Calendar</h3>
      </div>
      <div className="widget-content p_relative">
        {/* We're adding a custom class 'blog-calendar' to scope our styles 
          so we don't accidentally change other calendars in the app.
        */}
        <div className="blog-calendar">
           <Calendar
            onChange={onChange}
            value={date}
          />
        </div>
      </div>
       {/* Styles moved to public/assets/css/elements-css/blog.css */}
    </div>
  );
}
