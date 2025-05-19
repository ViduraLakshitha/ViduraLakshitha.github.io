# Personal Portfolio Website

A modern portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Responsive design
- Modern UI/UX
- Dynamic content management
- Contact form
- Project showcase
- Skills and experience section
- Blog section (optional)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm run install-all
```

3. Create a `.env` file in the server directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

4. Create a `.env` file in the client directory with:
```
REACT_APP_API_URL=http://localhost:5000
```

## Running the Application

1. Start both frontend and backend:
```bash
npm start
```

2. Or run them separately:
```bash
# Frontend only
npm run client

# Backend only
npm run server
```

## Project Structure

```
portfolio-website/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── package.json           # Root package.json
└── README.md             # Project documentation
```

## Technologies Used

- Frontend:
  - React.js
  - Material-UI
  - React Router
  - Axios

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT Authentication

## License

MIT 