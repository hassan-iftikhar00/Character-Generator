// for setting up envoirmental variables for path urls e.t.c
import dotenv from "dotenv";
// main backend framework
import express from "express";
// helps connect the client side to server side
import cors from "cors";
// mongoose is our ODM for working with mongodb|| ODM is used to intract with database
import mongoose from "mongoose";

// data of all characters
import router from "./characters.js";

dotenv.config();

// the url we defined in .env file
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DataBase!"));

const server = express();

server.use(express.json());

server.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//To link the code we moved to characters.js
server.use("/characters", router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
