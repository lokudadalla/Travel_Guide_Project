const TravelLankaApp = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() =>
            window.open(
              "https://apps.apple.com", // Replace with the actual iTunes link
              "_blank"
            )
          }
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            style={{ height: "40px" }}
          />
        </button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() =>
            window.open(
              "https://play.google.com/store", // Replace with the actual Google Play link
              "_blank"
            )
          }
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            style={{ height: "40px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default TravelLankaApp;
