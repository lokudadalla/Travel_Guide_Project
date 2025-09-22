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

const { setupSocket } = require("./controllers/msgcontroller.js");

const app = express();
const BACKEND_PORT = 3000;
const FRONTEND_PORT = 5173;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin:  ['http://localhost:5173','http://localhost:3001'], // Make sure this matches React frontend port
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true
}));

// Create HTTP Server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173','http://localhost:3001'], // Ensure this matches frontend port
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
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
