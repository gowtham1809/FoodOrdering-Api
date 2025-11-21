# Food Ordering Backend API

A Node.js Express backend service for a food ordering application. This API handles user authentication, order management, and customer contact features with MongoDB for persistent data storage.

## Features

- 🔐 **User Authentication** - JWT-based authentication with secure password encryption using bcrypt
- 🍔 **Order Management** - Create, retrieve, and track food orders
- 📧 **Contact Forms** - Customer contact submissions with email notifications via Nodemailer
- 🔒 **Secure API** - CORS protection and validated endpoints
- 📦 **Database** - MongoDB integration with Mongoose ODM
- 🚀 **RESTful API** - Clean and organized route structure

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: MongoDB with Mongoose v8.19.3
- **Authentication**: JWT (jsonwebtoken v9.0.2)
- **Security**: bcryptjs v3.0.3, CORS
- **Environment**: dotenv v17.2.3

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and configure:

```
MONGO_URI=mongodb://localhost:27017/restro-db
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xyz.mongodb.net/restro-db?retryWrites=true&w=majority

PORT=5000
CLIENT_URL=http://localhost:5173

# Email Configuration (Optional for Nodemailer)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

4. Start the server:

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /register` - Register a new user
- `POST /login` - Login user and receive JWT token
- `GET /profile` - Get user profile (requires authentication)

### Orders Routes (`/api/orders`)

- `GET /` - Get all orders
- `POST /` - Create a new order
- `GET /:id` - Get order by ID
- `PUT /:id` - Update order
- `DELETE /:id` - Delete order

### Contact Routes (`/api/contacts`)

- `POST /` - Submit a contact form

## Project Structure

```
Backend/
├── config/
│   └── db.js              # MongoDB connection configuration
├── models/
│   ├── User.js            # User schema and model
│   ├── Order.js           # Order schema and model
│   └── Contact.js         # Contact schema and model
├── routes/
│   ├── authRoutes.js      # Authentication endpoints
│   ├── ordersRoutes.js    # Order management endpoints
│   └── contactRoutes.js   # Contact form endpoints
├── server.js              # Express server setup
├── package.json           # Project dependencies
└── README.md              # This file
```

## Environment Variables

| Variable     | Description                  | Example                               |
| ------------ | ---------------------------- | ------------------------------------- |
| `MONGO_URI`  | MongoDB connection string    | `mongodb://localhost:27017/restaurant-db` |
| `PORT`       | Server port                  | `5000`                                |
| `CLIENT_URL` | Frontend client URL for CORS | `http://localhost:5173`               |

## Security Features

- ✅ CORS enabled for authorized origins only
- ✅ Password encryption with bcryptjs
- ✅ JWT token-based authentication
- ✅ Environment variables for sensitive data
- ✅ Validated API methods (GET, POST, PUT, DELETE)

## Error Handling

The API includes comprehensive error handling:

- MongoDB connection errors are logged with helpful diagnostics
- CORS policy violations are rejected
- Invalid requests return appropriate HTTP status codes

## Development

To develop and test the API:

```bash
# Run in development mode
npm run dev

# The server will automatically log connection status
# Check console for MongoDB connection status and server port
```

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running locally or Atlas credentials are correct
- Check `MONGO_URI` in `.env` file
- Verify the connection string format

### CORS Errors

- Ensure `CLIENT_URL` in `.env` matches your frontend URL
- Check that the frontend is running on the correct port

### Port Already in Use

- Change the `PORT` in `.env` to an available port
- Or kill the process using the current port

## Contributing

Feel free to submit issues and enhancement requests!

## Contact

For questions or support, please submit a contact form through the API or open an issue in the repository.

---

**Happy Coding! 🚀**
