import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../DashBoard';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReserveTrain = () => {
  const [reservData, setreservData] = useState([]);
  const [reservationData, setReservationData] = useState({
    rid:'',
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

  useEffect(() => {
    fetch(`https://localhost:7001/api/Reservation/GetReservations`)
      .then((res) => res.json())
      .then((data) => {
        setReservationData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const res_id = prompt("Enter the resid");
    // reservationData.rid = res_id;
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem("userRole");
    fetch(`https://localhost:7001/api/Reservation/AddReservation`, {
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
          // history.push('/');
          window.location.href = "http://localhost:5173/Reservation";
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
      <h2 className='text-center'>Create Reservation</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="rid">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="rid"
            value={reservationData.rid}
            onChange={handleChange}
            required
          />
        </Form.Group>
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
        <div className='py-2'/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className='py-2'/>
        <Link to={`/Reservation`}
                  className="btn btn-outline-dark btn-sm mr-2 edit-btn"
                  style={{ marginRight: "10px" }}>
                  Reservation List
        </Link>
      </Form>
    </div>
    </>
  );
};

export default ReserveTrain;