import React from "react";
import "./Notification.css";

const Notification = ({ newMessage }) =>
  newMessage ? <div className="notification__error">{newMessage}</div> : null;

export default Notification;
