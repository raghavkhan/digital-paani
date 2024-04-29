require("dotenv").config();
require("express-async-errors");
// require("./populate");
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const connectDB = require("./db/connect");
const authRoute = require("./routes/authRoute");
const bookRoute = require("./routes/bookRoute");
const userRoute = require("./routes/userRoute");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cookieParser(process.env.JWT_SECRET));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/book", bookRoute);
app.use("/api/v1/user", userRoute);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("db connected!");
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
};
start();
