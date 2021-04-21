import React from "react";
export function Header({ time, updaterTime }) {
  function clock() {
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hrs = date.getHours();
    let timeVal = `${hrs}:${min}:${sec}`;
    updaterTime(timeVal);
  }
  setInterval(clock, 1000);

  return (
    <div className="Header d-flex justify-content-center w-100">
      <h3 id="headerText">Current Time is {time}</h3>
    </div>
  );
}
