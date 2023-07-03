import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dashboard from "../DashBoard";
import ReserveTrain from "./AddReservation";

const Reservation = () => {
  
  const [reserve, setReserve] = useState([]);
  const userRole = localStorage.getItem("userRole");

  const handleDelete = (id) => {
        const token = localStorage.getItem("token"); // Retrieve the token from local storage
        // const userRole = localStorage.getItem("userRole");
        console.log(id);
    
        if (window.confirm("Do you want to remove the reservation ?")) {
          fetch(`https://localhost:7001/api/Train_detail/DeleteTrain?id=${id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the authorization header
            },
          })
            .then((res) => {
              if (res.ok) {
                alert("Reservation Removed successfully.");
                setReserve(
                  reserve.filter((res) => res.id !== id)
                );
              } else {
                throw new Error("Error deleting reservation !");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };

  useEffect(() => {
    fetch("https://localhost:7001/api/Train_detail/GetTrains")
      .then((res) => res.json())
      .then((data) => {
        setReserve(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(reserve);

  return (
    <>
    <Dashboard/>
    <div className="content-container">
      <h2 className="Trainhead text-center">Reservations</h2>

      <table className="table table-bordered tbl table-hover">
        <thead className="bg-dark text-white tableHead">
          <tr>
            <th>ID</th>
            <th>Passenger</th>
            <th>Date</th>
            <th>User ID</th>
            <th>Train ID</th>
            {/* <th>Departure Time</th>
            <th>Date of Departure</th>
            <th>Duration</th> */}
            {userRole === "Admin" && <th>Edit</th>}
          </tr>
        </thead>
        <tbody>
          {reserve.map((res) => (
            // all the data must be uniquly defined inside the <td> tags
            <tr key={res.Id}>
              <td>{res.id}</td>
              <td>{res.passenger}</td>
              <td>{res.date}</td>
              <td>{res.user_id}</td>
              <td>{res.train_id}</td>
              {/* <td>{res.dept_time}</td>
              <td>{res.dateOfDeparture}</td>
              <td>{res.duration} hours</td> */}
              {userRole === "Admin" && (
              <td>
                <Link
                    to={`/train/edit/${res.id}`}
                    className="btn btn-primary btn-sm mr-2 edit-btn"
                    style={{ marginRight: "10px" }}>
                    Edit
                  </Link>
                  <div className="px-2"/>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(res.id)}>
                    Delete
                  </button>
                  <div className="px-2"/>
                  <Link to={`/train/ReserveTrain`}
                  className="btn btn-success btn-sm mr-2 edit-btn"
                  style={{ marginRight: "10px" }}>
                  Book
                  </Link>
                </td>
                )}
                {userRole === "Passenger" && (
                  <td>
                  <Link to={`/train/ReserveTrain`}
                  className="btn btn-success btn-sm mr-2 edit-btn"
                  style={{ marginRight: "10px" }}>
                  Book
                  </Link>
                  </td>
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Reservation;