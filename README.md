# Customer Rewards Program

## Description

This project is a React application that simulates a retailer's rewards program. The program awards points to customers based on their purchases. Points are calculated for each transaction over a three-month period, and the total points are summarized for each customer on a monthly and overall basis.

## Project Structure

The project follows a standard React structure, with components, utilities, and services organized into separate directories.

## Components

# CustomerRewardPoints:

The main UI component that displays the reward points for each customer. It takes transaction data as props and renders the monthly and total points.

## Utils

# calculateRewardPoints:

Contains the logic for calculating reward points based on the transaction amount. This function is reused across the application to ensure consistent calculations.

## Services

# rewardService:

The reward sercice function processes a list of transactions to calculate the reward points earned by each customer. It organizes the points into two categories: monthlyPoints, which tracks points earned per customer each month, and totalPoints, which tracks the cumulative points earned by each customer across all transactions

## Testing

The project includes unit tests using React Testing Library to ensure the application works correctly. The tests cover:

# Reward Points Calculation:

Tests for the calculateRewardPoints utility function to ensure accurate point calculation.4

# Component Rendering:

Tests to verify that the CustomerRewardPoints component renders correctly with the expected data.

## Error Handling

The application includes robust error handling mechanisms:

# try-catch Blocks:

Used throughout the code to handle exceptions and display appropriate error messages to the user.

# Loading States:

Implemented in components to provide Loder during data fetching.

## Available Scripts

Start the React app:

### `npm start`

Runs the app test cases:

### `npm test`
