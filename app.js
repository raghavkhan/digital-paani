require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const bookRoute = require("./routes/bookRoute");
const userRoute = require("./routes/userRoute");

const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/book", bookRoute);

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("db connected!");
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
};
start();
