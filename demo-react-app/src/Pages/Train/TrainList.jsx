import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dashboard from "../DashBoard";
import ReserveTrain from "./AddReservation";
import AddTrain from "./AddTrain";
import './TrainList.css';

const TrainListing = () => {
  const [trainData, setTrainData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const userRole = localStorage.getItem("userRole");

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    console.log(id);

    if (window.confirm("Do you want to remove the train ?")) {
      fetch(`https://localhost:7001/api/Train_detail/DeleteTrain?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            alert("Removed successfully.");
            setTrainData(trainData.filter((train) => train.id !== id));
          } else {
            throw new Error("Error deleting train");
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
        setTrainData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTrainData = trainData.filter((train) =>
    train.train_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Dashboard />
      <div className="content-container">
        <h2 className="Trainhead text-center">Available Trains</h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search train by name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <table className="table table-bordered tbl table-hover">
          <thead className="bg-dark text-white tableHead">
            <tr>
              <th>ID</th>
              <th>Train Name</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Arrival Time</th>
              <th>Departure Time</th>
              <th>Date of Departure</th>
              <th>Duration</th>
              {userRole === "Admin" && <th>Edit</th>}
            </tr>
          </thead>
          <tbody>
            {filteredTrainData.map((train) => (
              <tr key={train.id}>
                <td>{train.id}</td>
                <td>{train.train_name}</td>
                <td>{train.source}</td>
                <td>{train.destination}</td>
                <td>{train.arr_time}</td>
                <td>{train.dept_time}</td>
                <td>{train.dateOfDeparture}</td>
                <td>{train.duration} hours</td>
                {userRole === "Admin" && (
                  <td>
                    {/* <Link
                      to={`/train/edit/${train.id}`}
                      className="btn btn-primary btn-sm mr-2 edit-btn"
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </Link> */}
                    <div className="px-2" />
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(train.id)}
                    >
                      Delete
                    </button>
                    <div className="px-2" />
                    <Link
                      to={`/train/ReserveTrain/${train.id}`}
                      className="btn btn-success btn-sm mr-2 edit-btn"
                      style={{ marginRight: "10px" }}
                    >
                      Book
                    </Link>
                  </td>
                )}
                {userRole === "Passenger" && (
                  <td>
                    <Link
                      to={`/train/ReserveTrain/${train.id}`}
                      className="btn btn-success btn-sm mr-2 edit-btn"
                      style={{ marginRight: "10px" }}
                    >
                      Book
                    </Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {userRole === "Admin" && (
          <Link
            to={`/train/AddTrain`}
            className="btn btn-outline-success btn-smmr-2 edit-btn"
            style={{ marginRight: "10px" }}
          >
            Add Train
          </Link>
        )}
      </div>
    </>
  );
};

export default TrainListing;