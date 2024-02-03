import express from 'express';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({ limit: "900kb" }));
app.use(express.urlencoded({ extended: true, limit: "900kb" }));

// routes
import userRoute from "./routes/user.route.js"

// routes declaration
app.use("/api/v1/user", userRoute);

export { app }