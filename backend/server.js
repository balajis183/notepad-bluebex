const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

//import routes
const notesRoutes = require("./routes/noteRoutes");

//cors middleware
app.use(cors());

//used to parse json requests
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/api", notesRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log("server is listening on port ", 8080);
  console.log(`http://localhost:8080`);
});
