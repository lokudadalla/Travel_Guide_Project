


// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const { exec } = require("child_process");
// const routes = require("./routes");

// const mysql = require("mysql2");
// const http = require("http");
// const { Server } = require("socket.io");
// //const dotenv = require("dotenv");
// //dotenv.config({ path: "../.env" });

// const app = express();
// const BACKEND_PORT = 3000; // This is the port that the backend server will run on
// const FRONTEND_PORT = 5173; // This is the port that the frontend server will run on

// // Create HTTP Server for WebSockets
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5000", // Adjust if needed
//     methods: ["GET", "POST"],
//   },
// });

// app.use(bodyParser.json());
// app.use(cors()); // Allow cross-origin requests


// // Database Connection
// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "Sdl101sql@",
//   database: "newdb",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//   } else {
//     console.log("Connected to the database.");
//   }
// });

// // Fetch all reviews
// app.get("/reviews/all", (req, res) => {
//   const sql = "SELECT * FROM reviews ORDER BY id ASC";

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("Error fetching reviews:", err);
//       return res.status(500).send({ error: "Database error." });
//     }
//     res.status(200).json(results);
//   });
// });




// app.post("/reviews", (req, res) => {
//   const { name, location, trip, rating, feedback } = req.body;

//   if (!name || !location || !trip || !rating || !feedback) {
//     return res.status(400).send({ error: "All fields are required." });
//   }

//   const sql = "INSERT INTO reviews (name, location, trip, rating, feedback) VALUES (?, ?, ?, ?, ?)";
//   db.query(sql, [name, location, trip, rating, feedback], (err, result) => {
//     if (err) {
//       console.error("Error inserting review:", err);
//       return res.status(500).send({ error: "Database error." });
//     }

//     const lastInsertedId = result.insertId;
//     db.query("SELECT * FROM reviews WHERE id = ?", [lastInsertedId], (err, newReview) => {
//       if (err) {
//         console.error("Error fetching latest review:", err);
//         return res.status(500).send({ error: "Database error." });
//       }

//       if (newReview.length > 0) {
//         const latestReview = newReview[0];

//         // ✅ Emit the new review to all connected clients
//         io.emit("newReview", latestReview);
        
//         console.log("New Review Emitted via WebSocket:", latestReview);
//       }

//       res.status(200).send({ message: "Review added successfully.", review: newReview[0] });
//     });
//   });
// });

// // WebSocket Connection Setup
// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });




// // WebSocket Connection
// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// // Start the Server with WebSocket
// server.listen(BACKEND_PORT, () => {
//   console.log(`Server running on http://localhost:${BACKEND_PORT}`);
//   exec(`open http://localhost:${FRONTEND_PORT}/`);
// });


// app.use(routes); // Use the routes defined in backend/routes/index.js

// app.use(express.static(path.join(__dirname, "..", "frontend")));
// // This is the route that will serve the frontend
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
// });
// // This is the port that the backend server will run on
// // const server_2 = app.listen(BACKEND_PORT, function () {
// //   console.log(`Express Server running at http://127.0.0.1:${BACKEND_PORT}/`);
// //   exec(`open http://localhost:${FRONTEND_PORT}/`); // Open the frontend in the browser
// // });












const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const { exec } = require("child_process");

const routes1 = require("./routes/indx.js");
const routes2 = require("./routes/index.js");
const router3 = require("./routes/hotel_route.js");
const { fetchAllHotels} = require("./services/hotel_service.js");

const { db } = require("./Config/config.js"); // Database Connection
const { setupSocket } = require("./controllers/msgcontroller.js");
const {hello} = require("./services/hotel_recommendation.js");

const app = express();
const BACKEND_PORT = 3000;
const FRONTEND_PORT = 5173;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:5173", // Make sure this matches React frontend port
  methods: ["GET", "POST"],
  credentials: true
}));

// Create HTTP Server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Ensure this matches frontend port
    methods: ["GET", "POST"],
    credentials: true
  },
});

// Setup WebSocket Connection
setupSocket(io);

// Use Routes
app.use(routes1);
app.use(routes2);
app.use(router3);

// Serve Static Files
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});


// Start the Server
server.listen(BACKEND_PORT, () => {
  console.log(`✅ Server running on http://localhost:${BACKEND_PORT}`);
  exec(`open http://localhost:${FRONTEND_PORT}/`);
});
