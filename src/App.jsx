import React, { useState } from "react";
import "./App.css";

function App() {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");

  const locations = [
  "Main Gate",
  "Financial Aid OFFICE",
  "Cafeteria",
  "Software Engineering Department",
  "Hostel",
];
    
  ];

  function findRoute() {
    if (startLocation === "" || destination === "") {
      alert("Please select both current location and destination.");
      return;
    }

    if (startLocation === destination) {
      alert("Current location and destination cannot be the same.");
      return;
    }

    alert(`Route selected:
From: ${startLocation}
To: ${destination}`);
  }

  return (
    <div className="app">
      <h1>Location Tracker System</h1>
<section className="location-details">
  <h2>Location Details</h2>

  <div className="location-card">
    <h3>Campus 1</h3>
    <p className="location-address">Main Campus, City Center</p>
    <p className="location-description">
      This campus includes classrooms, a library, cafeteria, and student areas.
    </p>

    <button
      className="location-button"
      onClick={() => alert("Opening map for the selected location...")}
    >
      View on Map
    </button>
  </div>
</section>
      <p className="subtitle">
        Select your current location and destination.
      </p>

      <div className="form">
        <label>Current Location</label>

        <select
          value={startLocation}
          onChange={(event) => setStartLocation(event.target.value)}
        >
          <option value="">Select current location</option>

          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <label>Destination</label>

        <select
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        >
          <option value="">Select destination</option>

          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <button onClick={findRoute}>Find Route</button>
      </div>
    </div>
  );
}

export default App;