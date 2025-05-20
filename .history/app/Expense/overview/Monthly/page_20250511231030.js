"use client";

import Nav from "@/app/ui/navbar/navbar";
import React from "react";
import "./monthly.module.css"; 

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export default function Page({ year, markedDays = {} }) {
  return (
    <>
    <div className="yearly-calendar">
      {months.map((month, monthIdx) => (
        <div key={month} className="month-section">
          <div className="month-title">{month}</div>
          <div className="days-grid">
            {[...Array(getDaysInMonth(year, monthIdx)).keys()].map(day => {
              const dayNum = day + 1;
              const key = `${year}-${monthIdx + 1}-${dayNum}`;
              const isMarked = markedDays[key];
              return (
                <div
                  key={dayNum}
                  className={`day-circle${isMarked ? " marked" : ""}`}
                  title={`${month} ${dayNum}`}
                >
                  {dayNum}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
    <Nav />
    </>
  );
}

export default function Page() {
    
}
    