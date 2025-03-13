let ioInstance;

const setupSocket = (io) => {
  ioInstance = io;

  io.on("connection", (socket) => {
    console.log("✅ A user connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });
};

// Emit a new review event
const emitNewReview = (review) => {
  if (ioInstance) {
    ioInstance.emit("newReview", review);
    console.log("📢 New Review Emitted via WebSocket:", review);
  }
};

module.exports = { setupSocket, emitNewReview };
