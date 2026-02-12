import React, { useState } from "react";
import jobsData from "./data";
import JobCard from "./components/JobCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [sortAZ, setSortAZ] = useState(false);

  // Filtering logic
  const filteredJobs = [...jobsData]
    .filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((job) =>
      location ? job.location === location : true
    )
    .filter((job) =>
      type ? job.type === type : true
    );

  // Sorting logic
  if (sortAZ) {
    filteredJobs.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div className="container">
      <h1>Job Listings</h1>

      <div className="filters">
  <input
    type="text"
    placeholder="Search by job title"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select value={location} onChange={(e) => setLocation(e.target.value)}>
    <option value="">All Locations</option>
    <option value="Remote">Remote</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Bangalore">Bangalore</option>
  </select>

  <select value={type} onChange={(e) => setType(e.target.value)}>
    <option value="">All Types</option>
    <option value="Internship">Internship</option>
    <option value="Full-time">Full-time</option>
  </select>

  <button onClick={() => setSortAZ(!sortAZ)}>
    {sortAZ ? "Reset Sort" : "Sort A-Z"}
  </button>

  {/* ✅ Add This Button */}
  <button
    onClick={() => {
      setSearch("");
      setLocation("");
      setType("");
      setSortAZ(false);
    }}
  >
    Clear Filters
  </button>
</div>


      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} searchTerm={search} />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
