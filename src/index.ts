import { cors } from "cors-ts";
import express from "express";
import mongoose from 'mongoose';
import config from './config';
import { api } from "./routes/api";

// Connect mongodb
(async () => {
    await mongoose.connect(config.DATABASE_URL);
  })();

const app = express();

app.use(cors());

// Add middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

api(app);

export default app;
