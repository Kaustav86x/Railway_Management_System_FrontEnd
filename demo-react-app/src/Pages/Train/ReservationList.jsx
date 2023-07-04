import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dashboard from "../DashBoard";
import ReserveTrain from "./AddReservation";

const Reservation = () => {
  
  const [reserveAdmin, setReserveAdmin] = useState([]);
  const [reservePassenger, setReservePassenger] = useState([]);
  const [cancelledIds, setCancelledIds] = useState([]);

  const userRole = localStorage.getItem("userRole");
  // fetching the current logged in name
  const userName = localStorage.getItem("userName");

  const handleDelete = (id) => {
        const token = localStorage.getItem("token"); // Retrieve the token from local storage
        console.log(id);
    
        if (window.confirm("Do you want to remove the reservation ?")) {
          fetch(`https://localhost:7001/api/Reservation/DeleteReservation?id=${id}`, {
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
      const handleCancel = (id) => {
        setCancelledIds([...cancelledIds, id]);
      };

      const isCancelled = (id) => {
        return cancelledIds.includes(id);
      };

      useEffect(() => {
        fetch("https://localhost:7001/api/Reservation/GetReservations")
          .then((res) => res.json())
          .then((data) => {
            const filteredData = data.filter((reservation) => reservation.passenger === userName);
            setReservePassenger(filteredData);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      useEffect(() => {
        fetch("https://localhost:7001/api/Reservation/GetReservations")
        .then((res) => res.json())
          .then((data) => {
            setReserveAdmin(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

  console.log(reserveAdmin);
  // console.log(userRole);
  // console.log(userName);

  return (
    <>
    <Dashboard/>
    <div className="content-container">
      <h2 className="Trainhead text-center">Reservations</h2>
      <div className="py-2"/>
        <table className="table table-bordered tbl table-hover">
        <thead className="bg-dark text-white tableHead">
          <tr>
            <th>ID</th>
            <th>Passenger</th>
            <th>Date</th>
            <th>User ID</th>
            <th>Train ID</th>
            {userRole === "Admin" && <th>Edit</th>}
            {userRole === "Passenger" && <th>{ }</th>}
          </tr>
        </thead>
        {userRole === "Passenger" ? (
          <tbody>
          {reservePassenger.map((res) => (
            // all the data must be uniquly defined inside the <td> tags
            <tr key={res.Id}>
              <td>{res.id}</td>
              <td>{res.passenger}</td>
              <td>{res.date}</td>
              <td>{res.userId}</td>
              <td>{res.trainId}</td>
              <td>
                  <div className="px-2"/>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleCancel(res.id)}
                    disabled={isCancelled(res.id)}>
                    {isCancelled(res.id) ? 'Cancelled' : 'Cancel'}
                  </button>
                  <div className="px-2"/>
              </td>
            </tr>
          ))}
        </tbody>
        ) : (
          <tbody>
          {reserveAdmin.map((res) => (
            // all the data must be uniquly defined inside the <td> tags
            <tr key={res.Id}>
              <td>{res.id}</td>
              <td>{res.passenger}</td>
              <td>{res.date}</td>
              <td>{res.userId}</td>
              <td>{res.trainId}</td>
              {userRole === "Admin" && (
              <td>
                  <div className="px-2"/>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(res.id)}>
                    Delete
                  </button>
                  <div className="px-2"/>
              </td>
                )}
            </tr>
          ))}
        </tbody>
        )}
      </table>
        {/* <Link to={`/train/ReserveTrain`}
                  className="btn btn-outline-success btn-sm mr-2 edit-btn"
                  style={{ marginRight: "10px" }}>
                  Add Reservation
        </Link> */}
    </div>
    </>
  );
};

export default Reservation;