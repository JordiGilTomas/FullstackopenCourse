import React from "react";
import "./Notification.css";

const Notification = ({ message, error }) =>
  message ? (
    <div
      className={`notification__error ${
        error ? "notification_error-red" : null
      }`}
    >
      {message}
    </div>
  ) : null;

export default Notification;
