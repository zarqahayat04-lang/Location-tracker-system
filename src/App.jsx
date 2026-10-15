import React, { useState } from "react";
import "./App.css";

function App() {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");

  const locations = [
    "Main Gate",
    "VC OFFICE",
    "Printer Shop",
    "Software Engineering Department",   "Software Engineering Department",
    "Hostel",
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
document.getElementById("resetSelections").addEventListener("click", function () {
  const locationDropdown = document.getElementById("locationDropdown");

  if (locationDropdown) {
    locationDropdown.value = "";
  }
});