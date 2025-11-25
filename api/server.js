const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(express.json());

// CORS CORRECT pour Vercel
app.use(cors({
  origin: ["http://localhost:5173", "https://ton-front.vercel.app"],
}));

// Routes
const sneakersRouter = require("../rooter/sneakers.router");
const utilisateursRouter = require("../rooter/utilisateurs.router");
const messageRouter = require("../rooter/messages.router");

// Mongo connect (dans serverless → ajouter un cache de connexion)
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
  });
  isConnected = true;
}

app.use("/api/sneakers", sneakersRouter);
app.use("/api/utilisateur", utilisateursRouter);
app.use("/api/message", messageRouter);

// Export pour Vercel (PAS de app.listen)
module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};
