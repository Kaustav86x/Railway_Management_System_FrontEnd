import React, { useState } from 'react';
import Dashboard from '../DashBoard';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddTrain.css';

const AddTrain = () => {
  const [trainName, setTrainName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [arrTime, setArrTime] = useState('');
  const [deptTime, setDeptTime] = useState('');
  const [dateOfDeparture, setDateOfDeparture] = useState('');
  const [duration, setDuration] = useState(0);
  const [TDC, tdcId] = useState(0);
  const [seats, setSeats] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const addTrainData = {
      Train_name: trainName,
      Source: source,
      Destination: destination,
      Arr_time: arrTime,
      Dept_time: deptTime,
      DateOfDeparture: dateOfDeparture,
      Duration: duration,
      TDC : TDC,
      Available_Seats: seats
    };
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem("userRole");
    fetch(`https://localhost:7001/api/Train_detail/AddTrains`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addTrainData),
    })
      .then((res) => {
        if (res.ok) {
          alert('Train added successfully!');
          window.location.href = "http://localhost:5173/TrainListing";
        } else {
          throw new Error('Error adding train');
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
      <h2 className='text-center'>Add Train</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="trainName">
          <Form.Label>Train Name</Form.Label>
          <Form.Control
            type="text"
            name="trainName"
            // value={trainName}
            onChange={(e) => setTrainName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="source">
          <Form.Label>Source</Form.Label>
          <Form.Control
            type="text"
            name="source"
            // value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="destination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            name="destination"
            // value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="arrTime">
          <Form.Label>Arrival Time</Form.Label>
          <Form.Control
            type="text"
            name="arrivalTime"
            // value={arrTime}
            onChange={(e) => setArrTime(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="deptTime">
          <Form.Label>Departure Time</Form.Label>
          <Form.Control
            type="text"
            name="departureTime"
            // value={deptTime}
            onChange={(e) => setDeptTime(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="dateofDeparture">
          <Form.Label>Date Of Departure</Form.Label>
          <Form.Control
            type="date"
            name="dateofdeparture"
            // value={dateOfDeparture}
            onChange={(e) => setDateOfDeparture(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="duration">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type="number"
            name="duration"
            // value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="tdc">
          <Form.Label>TCD Id</Form.Label>
          <Form.Control
            type="string"
            name="tdc"
            // value={duration}
            onChange={(e) => tdcId(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="seats">
          <Form.Label>Available Seats</Form.Label>
          <Form.Control
            type="number"
            name="seats"
            // value={duration}
            onChange={(e) => setSeats(e.target.value)}
            required
          />
        </Form.Group>
        <div className='py-2'/>
        <button className="btn btn-outline-success btn-sm mr-2 edit-btn" type="submit">
          Submit
        </button>
        <div className='py-2'/>
        <Link to={`train/TrainListing`}
                  className="btn btn-outline-dark btn-sm mr-2 edit-btn"
                  style={{ marginRight: "10px" }}>
                  Train List
        </Link>
      </Form>
    </div>
    </>
  );
}

export default AddTrain;