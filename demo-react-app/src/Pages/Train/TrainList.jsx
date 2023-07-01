// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const TrainListing = () => {
//   const [trainData, setTrainData] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Retrieve the token from local storage

//     fetch("https://localhost:7001/api/Train_detail/GetTrainsByName", {
//       headers: {
//         Authorization: `Bearer ${token}`, // Include the token in the authorization header
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setTrainData(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     const token = localStorage.getItem("token"); // Retrieve the token from local storage
//     console.log(id);

//     if (window.confirm("Do you want to remove?")) {
//       fetch(`https://localhost:7100/api/Train_detail/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`, // Include the token in the authorization header
//         },
//       })
//         .then((res) => {
//           if (res.ok) {
//             alert("Removed successfully.");
//             setTrainData(
//               trainData.filter((train) => train.id !== id)
//             );
//           } else {
//             throw new Error("Error deleting train");
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };

//   return (
//     <div className="content-container">
//       <h2 className="TrainListinghead">Train Listing</h2>
//       {/* <Link to="/train/add" className=" add-train">
//         Add Train
//       </Link> */}
//       <table className="table table-bordered tbl table-hover">
//         <thead className="bg-dark text-white tableHead">
//           <tr>
//             <th>ID</th>
//             <th>Train Name</th>
//             <th>Source</th>
//             <th>Destination</th>
//             <th>Arrival Time</th>
//             <th>Departure Time</th>
//             <th>Date of Departure</th>
//             <th>Duration</th>
//             <th>Edit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {trainData.map((train) => (
//             <tr key={train.id}>
//               <td>{train.id}</td>
//               <td>{train.Train_name}</td>
//               <td>{train.Source}</td>
//               <td>{train.Destination}</td>
//               <td>{train.Arr_time}</td>
//               <td>{train.Dept_time}</td>
//               <td>{train.DateOfDeparture}</td>
//               <td>{train.Duration}</td>
//               <td>
//                 <Link
//                   to={`/train/edit/${train.id}`}
//                   className="btn btn-primary btn-sm mr-2 edit-btn"
//                   style={{ marginRight: "10px" }}
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDelete(train.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainListing;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const TrainListing = () => {
//   const [trainData, setTrainData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Retrieve the token from local storage

//     let url = "https://localhost:7001/api/Train_detail/GetTrainsByName";
//     if (searchQuery && searchQuery.trim()) {
//       url += `?trainName=${searchQuery.trim()}`;
//     }

//     fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`, // Include the token in the authorization header
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setTrainData(data.json);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [searchQuery]);

//   const handleDelete = (id) => {
//     const token = localStorage.getItem("token"); // Retrieve the token from local storage
//     console.log(id);

//     if (window.confirm("Do you want to remove?")) {
//       fetch(`https://localhost:7001/api/Train_detail/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`, // Include the token in the authorization header
//         },
//       })
//         .then((res) => {
//           if (res.ok) {
//             alert("Removed successfully.");
//             setTrainData(
//               trainData.filter((train) => train.id !== id)
//             );
//           } else {
//             throw new Error("Error deleting train");
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };

//   return (
//     <div className="content-container">
//       <h2 className="TrainListinghead">Train Listing</h2>
//       <Link to="/train/add" className=" add-train">
//         Add Train
//       </Link>
//       <input
//         type="text"
//         className="form-control mb-2"
//         placeholder="Search by train name"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <table className="table table-bordered tbl table-hover">
//         <thead className="bg-dark text-white tableHead">
//           <tr>
//             <th>ID</th>
//             <th>Train Name</th>
//             <th>Source</th>
//             <th>Destination</th>
//             <th>Arrival Time</th>
//             <th>Departure Time</th>
//             <th>Date of Departure</th>
//             <th>Duration</th>
//             <th>Edit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {trainData
//             .filter((train) =>
//               train.Train_name.toLowerCase().includes(searchQuery.toLowerCase())
//             )
//             .map((train) => (
//               <tr key={train.id}>
//                 <td>{train.id}</td>
//                 <td>{train.Train_name}</td>
//                 <td>{train.Source}</td>
//                 <td>{train.Destination}</td>
//                 <td>{train.Arr_time}</td>
//                 <td>{train.Dept_time}</td>
//                 <td>{train.DateOfDeparture}</td>
//                 <td>{train.Duration}</td>
//                 <td>
//                   <Link
//                     to={`/train/edit/${train.id}`}
//                     className="btn btn-primary btn-sm mr-2 edit-btn"
//                     style={{ marginRight: "10px" }}
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => handleDelete(train.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainListing;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const GetAllTrains = () => {
  const userRole = localStorage.getItem("userRole");
  const [trainData, setTrainData] = useState([]);

  const handleDelete = (id) => {
        const token = localStorage.getItem("token"); // Retrieve the token from local storage
        console.log(id);
        // console.log(token);
    
        if (window.confirm("Do you want to remove?")) {
          fetch(`https://localhost:7001/api/Train_detail/DeleteTrain?id=${id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the authorization header
            },
          })
            .then((res) => {
              if (res.ok) {
                alert("Removed successfully.");
                setTrainData(
                  trainData.filter((train) => train.id !== id)
                );
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

  console.log(trainData);

  return (
    <div className="content-container">
      <h2 className="Trainhead">Train Listing</h2>

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
          </tr>
        </thead>
        <tbody>
          {trainData.map((train) => (
            // all the data must be uniquly defined inside the <td> tags
            <tr key={train.Id}>
              <td>{train.id}</td>
              <td>{train.train_name}</td>
              <td>{train.source}</td>
              <td>{train.destination}</td>
              <td>{train.arr_time}</td>
              <td>{train.dept_time}</td>
              <td>{train.dateOfDeparture}</td>
              <td>{train.duration} hours</td>
              <td><Link
                    to={`/train/edit/${train.id}`}
                    className="btn btn-primary btn-sm mr-2 edit-btn"
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(train.id)}
                  >
                    Delete
                  </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllTrains;