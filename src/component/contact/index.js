import React from 'react';

class Contact extends React.Component {
  render() {
    return (
    <div className="contact">
      <h3>Contact</h3>
      <p>Call us for takeout orders! REMINDER: FIND OUT WHERE THEY DELIVER TO OR SOMETHING</p>
      <p>Phone: 206-457-5375</p>
      <p>Address: 2355 10th Ave E, Seattle, Wa 98102</p>
      <p>Hours</p>
        <ul>
          <li>Monday 11:00am - 8:30pm</li>
          <li>Tuesday 11:00am - 8:30pm</li>
          <li>Wednesday 11:00am - 8:30pm</li>
          <li>Thursday 11:00am - 8:30pm</li>
          <li>Friday 11:00am - 8:30pm</li>
          <li>Saturday 11:00am - 8:30pm</li>
          <li>Sunday: CLOSED</li>
        </ul>
    </div>
    );
  }
}

export default Contact;
