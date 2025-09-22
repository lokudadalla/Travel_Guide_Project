import React, { useEffect, useState } from "react";
import Chat from "../chat/Chat.jsx";

const CombinedComponent = ({ videoSrc, customStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock/unlock scroll only while open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  return (
    <div style={{ ...styles.container, ...customStyle }}>
      {/* Floating Chat Button (always visible) */}
      <button
        style={styles.fab}
        aria-label="Open chat"
        onClick={() => setMenuOpen(true)}
      >
        <div style={styles.chatWrapper}>
          <div style={styles.border} />
          <video style={styles.video} autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </button>

      {/* Chat Panel (render ONLY when open) */}
      {menuOpen && (
        <div style={styles.panelWrapper}>
          {/* Optional gradient/card background for the panel */}
          <div style={styles.panelCard}>
            <Chat onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { position: "relative", zIndex: 0 },

  // Floating action button (bottom-right)
  fab: {
    position: "fixed",
    bottom: 30,
    right: 40,
    padding: 0,
    border: "none",
    background: "none",
    cursor: "pointer",
    zIndex: 10000,
  },
  chatWrapper: {
    position: "relative",
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: "50%",
  },
  border: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    background:
      "linear-gradient(45deg, rgba(69,92,87,0.8), rgba(22,9,122,0.8))",
    filter: "blur(1px)",
    zIndex: 1,
  },
  video: {
    position: "absolute",
    inset: 4,
    width: "calc(100% - 8px)",
    height: "calc(100% - 8px)",
    objectFit: "cover",
    borderRadius: "50%",
    zIndex: 2,
  },

  // The wrapper that holds the chat panel; fixed to bottom-right
  panelWrapper: {
    position: "fixed",
    bottom: 100, // leaves room for the FAB
    right: 20,
    zIndex: 10001,
  },

  // The chat card itself
  panelCard: {
    width: 380,
    maxWidth: "90vw",
    height: 520,
    maxHeight: "80vh",
    borderRadius: 10,
    overflow: "hidden",
    background:
      "linear-gradient(45deg, rgba(54,34,27,0.92), rgba(20,9,107,0.92))",
    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
    display: "flex",
  },
};

export default CombinedComponent;

