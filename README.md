# Food Delivery Project

This is a food delivery application built using modern web technologies like React, Vite, Stripe, Express.js, Node.js, and MongoDB. The project is divided into three main folders: `admin`, `backend`, and `frontend`.

## Project Structure

- **Admin**: The admin panel for managing the food delivery service.
- **Backend**: The server-side code that handles the API, authentication, and communication with the database.
- **Frontend**: The customer-facing interface of the food delivery service.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Payments**: Stripe

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or Yarn
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/JibinB02/food-delivery-mern.git
    ```

2. Navigate into each folder (`admin`, `backend`, `frontend`) and install the dependencies:

    ```bash
    cd admin
    npm install
    ```

    ```bash
    cd ../backend
    npm install
    ```

    ```bash
    cd ../frontend
    npm install
    ```

### Running the Project

1. **Admin Panel**:
    - Navigate to the `admin` folder and run the following command:

    ```bash
    npm run dev
    ```

2. **Frontend**:
    - Navigate to the `frontend` folder and run the following command:

    ```bash
    npm run dev
    ```

3. **Backend**:
    - Navigate to the `backend` folder and run the following command:

    ```bash
    npm run server
    ```

4. Ensure MongoDB is running on your system. You can start it using:

    ```bash
    mongod
    ```

### Environment Variables

Make sure to create an `.env` file in the `backend` folder with the necessary environment variables, such as:

```plaintext
JWT_SECRET=your-jwt-secret
MONGO_URI=your-mongodb-uri
STRIPE_SECRET_KEY=your-stripe-secret-key
