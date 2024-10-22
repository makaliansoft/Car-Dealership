import React, { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../utils/localStorageUtil";
import "../styles/Reports.css"; // Import the CSS file
import ReportSkeleton from "../components/ReportSkeleton";

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
      <div className="reports-grid">
        {loading ? (
          <ReportSkeleton responses={responses}/>
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
