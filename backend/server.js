// Entry point for the backend server
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHanlder } = require("./middleware/errorMiddlware");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHanlder);

// All the Routes goes to ./routes/goalRoutes
// app.get("/api/goals", (req, res) => {
//   res.status(200).json({
//     message: "Goals Got",
//   });
// });

app.listen(port, () => {
  console.log(`Server Strarted On Port ${port}`);
});
