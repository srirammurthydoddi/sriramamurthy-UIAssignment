import { render, screen } from "@testing-library/react";
import App from "./App";
import { calculateRewardPoints } from "./utils/calculateRewardPoints";
import CustomerRewardPoints from "./components/CustomerRewardPoints";

test("renders learn react link", () => {
  render(<App />);
});

// Test Cases for Calculate Reward Points

describe("calculateRewardPoints", () => {
  test("returns 0 points for amounts <= $50", () => {
    expect(calculateRewardPoints(50)).toBe(0);
  });

  test("returns correct points for amounts between $50 and $100", () => {
    expect(calculateRewardPoints(75)).toBe(25);
  });

  test("returns correct points for amounts over $100", () => {
    expect(calculateRewardPoints(120)).toBe(90);
  });

  test("handles edge cases correctly", () => {
    expect(calculateRewardPoints(50)).toBe(0);
    expect(calculateRewardPoints(100)).toBe(50);
    expect(calculateRewardPoints(101)).toBe(52);
  });
});

// Test Cases for CustomerRewardPoints Component

const transactions = [
  { customerId: 1, date: "2024-06-01", amount: 120 },
  { customerId: 1, date: "2024-07-01", amount: 60 },
  { customerId: 2, date: "2024-06-15", amount: 75 },
  { customerId: 2, date: "2024-08-01", amount: 200 },
];

describe("CustomerPoints", () => {
  test("renders customer points correctly", () => {
    render(<CustomerRewardPoints transactions={transactions} />);

    expect(screen.getByText(/Customer 1/i)).toBeInTheDocument();
    expect(screen.getByText(/90 points/i)).toBeInTheDocument();
    expect(screen.getByText(/250 points/i)).toBeInTheDocument();
  });
});
