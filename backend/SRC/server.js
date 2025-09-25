import express, { json } from "express";
import notesRoutes from './routes/notesRoutes.js';
import { connnectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from 'cors';

dotenv.config();

// const express = require("express")

const app = express();
const PORT =  process.env.PORT || 5001


//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); //this middleware will parse JSON bodies: req.body
app.use(rateLimiter)

// app.use((req,res,next)=>{
//   console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//   next()
// })

app.use("/api/notes",notesRoutes);

connnectDB().then(()=>{
  app.listen(PORT, () =>{
    console.log("Server started on port:", PORT);
  });

})


//