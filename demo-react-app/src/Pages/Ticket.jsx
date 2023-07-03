import React, { useState } from 'react';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    ticketNo: '',
    source: '',
    destination: '',
    date: '',
    trainNo: '',
    classType: '',
    passengerCount: '',
    fname: '',
    lname: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleTicketDetailsSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/Ticket/GetTicketDetailsByNumber/${formData.ticketNo}`);
      if (response.ok) {
        const ticket = await response.json();
        setFormData({
          ticketNo: ticket.ticket_no,
          source: ticket.source,
          destination: ticket.destination,
          date: ticket.date,
          trainNo: ticket.train_no,
          classType: ticket.class_type,
          passengerCount: ticket.passenger_count,
          fname: ticket.fname,
          lname: ticket.lname,
          phone: ticket.phone,
          email: ticket.email
        });
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleTicketBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/Ticket/BookTicket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const bookingDetails = await response.json();
        window.location.href = `/ticket-confirmation/${bookingDetails.ticketNo}`;
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Ticket Form</h1>
      <form onSubmit={handleTicketDetailsSubmit}>
        <h2>View Ticket Details</h2>
        <label>
          Ticket Number:
          <input type="text" name="ticketNo" value={formData.ticketNo} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData.ticketNo &&
        <form onSubmit={handleTicketBookingSubmit}>
          <h2>Book Tickets</h2>
          <label>
            Source:
            <input type="text" name="source" value={formData.source} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Destination:
            <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Train Number:
            <input type="text" name="trainNo" value={formData.trainNo} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Class Type:
            <select name="classType" value={formData.classType} onChange={handleChange} required>
              <option value="">--Select Class Type--</option>
              <option value="First Class">First Class</option>
              <option value="Second Class">Second Class</option>
            </select>
          </label>
          <br />
          <label>
            Number of Passengers:
            <input type="number" name="passengerCount" value={formData.passengerCount} onChange={handleChange} required />
          </label>
          <br />
          <label>
            First Name:
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  );
}

export default TicketForm;