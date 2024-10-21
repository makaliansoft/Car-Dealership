import React, { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../utils/localStorageUtil";
import SkeletonLoader from "../components/SkeletonLoader";
import "../styles/Reports.css"; // Import the CSS file

const Reports = () => {
  const [loading, setLoading] = useState(true);
  const responses = loadFromLocalStorage("userDetails") || []; // Load user details from local storage

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="reports-container">
      <h1>Reports</h1>
      <div className="reports-grid">
        {loading ? (
          <SkeletonLoader count={responses.length} height={200} />
        ) : (
          <>
            {responses.map((user, index) => (
              <div className="report-card" key={index}>
                <img
                  className="report-card-image"
                  src={user.photo}
                  alt={`${user.name}'s photo`}
                />
                <div className="report-card-content">
                  <h2 className="card-title">{user.name}</h2>
                  <p className="card-info">Email: {user.email}</p>
                  <p className="card-info">Phone: {user.phone}</p>
                  <p className="card-info">Address: {user.address}</p>
                  <p className="card-info">Feedback: {user.feedback}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Reports;
