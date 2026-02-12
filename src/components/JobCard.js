import React from "react";

function highlightText(text, highlight) {
  if (!highlight) return text;

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase()
      ? <mark key={index}>{part}</mark>
      : part
  );
}

function JobCard({ job, searchTerm }) {
  return (
    <div className="job-card">
      <h3>{highlightText(job.title, searchTerm)}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
    </div>
  );
}

export default JobCard;   // 🔥 THIS LINE IS IMPORTANT
