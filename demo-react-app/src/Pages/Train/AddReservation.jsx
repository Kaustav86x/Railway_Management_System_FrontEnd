import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../DashBoard';

const ReserveTrain = () => {
  const [reservationData, setReservationData] = useState({
    passenger: '',
    date: '',
    userId: '',
    trainId: '',
  });

//   const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    fetch('https://localhost:7100/api/Reservation/AddReservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reservationData),
    })
      .then((res) => {
        if (res.ok) {
          alert('Reservation created successfully!');
          history.push('/');
        } else {
          throw new Error('Error creating reservation');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <Dashboard/>
    <div className="content-container">
      <h2>Create Reservation</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="passenger">
          <Form.Label>Passenger</Form.Label>
          <Form.Control
            type="text"
            name="passenger"
            value={reservationData.passenger}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={reservationData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="userId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            value={reservationData.userId}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="trainId">
          <Form.Label>Train ID</Form.Label>
          <Form.Control
            type="text"
            name="trainId"
            value={reservationData.trainId}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
};

export default ReserveTrain;