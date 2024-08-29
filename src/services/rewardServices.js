import { calculateRewardPoints } from "../utils/calculateRewardPoints";
import { getMonth } from "../utils/date";

export const calculateCustomerPoints = (transactions) => {
  const monthlyPoints = {};
  const totalPoints = {};

  transactions.forEach(({ customerId, date, amount }) => {
    const monthYear = getMonth(date);

    if (!monthlyPoints[customerId]) {
      monthlyPoints[customerId] = {};
      totalPoints[customerId] = 0;
    }
    if (!monthlyPoints[customerId][monthYear]) {
      monthlyPoints[customerId][monthYear] = 0;
    }

    const points = calculateRewardPoints(amount);
    monthlyPoints[customerId][monthYear] += points;
    totalPoints[customerId] += points;
  });

  return { monthlyPoints, totalPoints };
};
