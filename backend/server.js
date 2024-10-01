const express = require("express");
const connection = require("./db");
const userRoute = require("./routs/userRoute");
require("dotenv").config();
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { testRoute } = require("./routs/testRoute");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(cors());

// Define rate limiting rules
const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    message:
      "Too many requests from this IP, please try again after 15 minutes",
  },
  headers: true, // Send rate limit info in the headers
});

app.use("/api/", apiRateLimit);

/** For test */
app.get("/api/v1", async (req, res) => {
  try {
    return res.status(200).send({ message: "Hello Omega Travel!" });
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
});

/** Routes */
app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", testRoute);

/** listning port and connectiong DB */
app.listen(PORT, async () => {
  try {
    await connection();
    console.log("connected successfully to DB");
    console.log(`App is running on port : ${PORT}`);
  } catch (error) {
    console.log({
      message: "Somthing wernt wrong while connecting DB",
      error: error,
    });
  }
});
