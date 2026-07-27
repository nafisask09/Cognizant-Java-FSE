import React from "react";
import "./App.css";

function App() {

  const office = {
    Name: "Smart Work Office",
    Rent: 55000,
    Address: "Hyderabad"
  };

  const officeList = [
    {
      Name: "Smart Work Office",
      Rent: 55000,
      Address: "Hyderabad"
    },
    {
      Name: "Tech Park",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "Cyber Hub",
      Rent: 45000,
      Address: "Chennai"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
        alt="Office Space"
        width="500"
      />

      <h2>Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p style={{ color: office.Rent < 60000 ? "red" : "green" }}>
        <b>Rent:</b> {office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div key={index}>

          <h3>{item.Name}</h3>

          <p
            style={{
              color: item.Rent < 60000 ? "red" : "green"
            }}
          >
            Rent: {item.Rent}
          </p>

          <p>Address: {item.Address}</p>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;