import React from "react";
import { useState, useEffect } from "react";
import "./Status.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
const battery = <FontAwesomeIcon icon={faBatteryFull}></FontAwesomeIcon>;

function Status() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Status-Wrapper">
      <div> {time}</div>
      <div>{battery}</div>
    </div>
  );
}

export default Status;
