import React from "react";
import { calculateCustomerPoints } from "../../services/rewardServices";
import "./index.css";

const CustomerRewardPoints = ({ transactions }) => {
  const { monthlyPoints, totalPoints } = calculateCustomerPoints(transactions);

  return (
    <div className="customer-points">
      {Object.keys(monthlyPoints).map((customerId) => (
        <div key={customerId}>
          <h3>Customer {customerId}</h3>
          <div>
            <h4>Monthly Points</h4>
            {Object.keys(monthlyPoints[customerId]).map((monthYear) => (
              <div key={monthYear}>
                <strong>{monthYear}:</strong>{" "}
                {monthlyPoints[customerId][monthYear]} points
              </div>
            ))}
          </div>
          <div>
            <h4>Total Points</h4>
            <strong>{totalPoints[customerId]}</strong> points
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CustomerRewardPoints);
