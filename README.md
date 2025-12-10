🥾 Sneaker Backend API
Short Description

This project is a RESTful backend API for a sneaker e-commerce platform.
It handles sneakers data, user management, and user messages, and is designed to be easily connected to a React frontend. The API is deployed on Vercel and follows a simple, scalable structure using Node.js and Express.

Technologies Used

Node.js

Express.js

JavaScript

JSON (data source for sneakers)

MongoDB / Mongoose (for Users & Messages)

Vercel (deployment)

Features

Sneaker catalog with categories, gender, stock, sizes, prices, and reviews

User management (create, update, delete users)

User messaging system

REST API endpoints ready for frontend consumption

Clear separation of models and routes

Easy to extend with authentication and admin roles

What the User Can Do

From a frontend application (ex: React), users can:

Browse all sneakers

View sneaker details

Filter sneakers by category or genre

Create an account

View and manage user data

Send messages

Retrieve their own messages

Project Structure & Process

The backend is structured around models and routes:

Models

User → stores user credentials and metadata

Message → stores user messages

Sneakers JSON

Contains pre-defined sneaker data used by the API

Routes

Each model has dedicated API routes

HTTP methods follow REST conventions (GET, POST, PUT, DELETE)

This design keeps the backend modular and frontend-friendly.

API Routes
/api/sneakers

GET /all → Get all sneakers

GET /detail/:id → Get sneaker details

GET /category/femme → Sneakers for women

GET /category/homme → Sneakers for men

GET /genre/:genre → Filter by genre

DELETE /delete/:id → Delete a sneaker

PUT /update/:id → Update sneaker information

/api/utilisateur

POST /add → Create a user

GET /users → Get all users

GET /find/:id → Find a specific user

PUT /update/:id → Update a user

DELETE /delete/:id → Delete a user

/api/message

POST /add → Add a message

GET /message/:id → Get messages for a user

How I Built It

Designed the data models (Users, Messages, Sneakers)

Defined REST API routes for each model

Used a JSON file to mock sneaker data for fast development

Connected models with routes using Express

Tested endpoints using tools like Postman

Deployed the backend to Vercel

Structured the project to easily plug in a React frontend later

What I Learned

How to structure a scalable Express backend

REST API best practices

Working with models and route separation

Deploying Node.js projects on Vercel

Designing APIs with frontend integration in mind

Thinking ahead about extensibility (auth, admin, cart, etc.)

What Could Be Improved

Add authentication (JWT + bcrypt)

Role-based access control (admin / user)

Replace JSON sneaker data with a real database

Add pagination and search

Improve validation and error handling

Add API documentation (Swagger)

Add unit and integration tests

How to Run the Project Locally
1. Clone the repository
git clone <your-repo-url>
cd sneaker-backend

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file:

PORT=3000
MONGO_URI=your_mongodb_connection_string

4. Run the server
npm run dev


or

npm start

5. Access the API
http://localhost:3000/api
