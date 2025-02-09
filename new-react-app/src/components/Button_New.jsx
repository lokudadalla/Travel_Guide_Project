// import React, { useState } from 'react';

// const Button_new = ({ videoSrc, customStyle }) => {
//   const [clicked, setClicked] = useState(false);

//   const handleButtonClick = () => {
//     setClicked(true);
//   };


//   return (
//     <div style={{ ...styles.container, ...customStyle }}>
//       {!clicked ? (
//         <button style={styles.button} onClick={handleButtonClick}>
//           <div style={styles.chatWrapper}>
//             {/* Border Animation */}
//             <div style={styles.border}></div>
//             {/* Chatbot Video */}
//             <video
//               style={styles.video}
//               autoPlay
//               loop
//               muted
//               playsInline
//             >
//               <source src={videoSrc} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </button>
//       ) : (
//         <h1 style={styles.text}>Hello World</h1>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     padding: 0,
//     border: 'none',
//     background: 'none',
//     cursor: 'pointer',
//   },
//   chatWrapper: {
//     position: 'relative',
//     width: '120px',
//     height: '120px',
//     overflow: 'hidden',
//   },
//   border: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Custom shape
//     background: 'linear-gradient(45deg,rgb(69, 92, 87, 80%),rgb(22, 9, 122, 80%))',
//     zIndex: 1,
//     animation: 'moveBorder 3s linear infinite', // Smooth movement
//   },
//   video: {
//     position: 'absolute',
//     width: '90%',
//     height: '90%',
//     objectFit: 'cover',
//     clipPath: 'inset(12% 8% round 100% 80% 100% 20%)', // Matches the custom border shape
//     zIndex: 2,
//   },
//   text: {
//     fontSize: '24px',
//     color: '#007bff',
//   },
// };

// export default Button_new;


import React, { useState } from 'react';
import Chat from '../chat/Chat.jsx';

const CombinedComponent = ({ videoSrc, customStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div style={{ ...styles.container, ...customStyle }}>
      {/* Button */}
      <button style={styles.button} onClick={toggleMenu}>
        <div style={styles.chatWrapper}>
          {/* Border Animation */}
          <div style={styles.border}></div>
          {/* Chatbot Video */}
          <video
            style={styles.video}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </button>

      {/* Menu */}
      <div
        className={`fixed bottom-0 right-0 bg-black bg-opacity-60 z-10 transition-transform duration-300 rounded ${
          menuOpen ? "translate-x-0 translate-y-0" : "translate-x-full translate-y-full"
        }`}
        style={{
          width: "50%", // Adjust the menu width as needed
          height: "80%", // Adjust the menu height as needed
          clipPath: "inset(23% 2% 0% 2%)", // Custom shape
          background: 'linear-gradient(45deg, rgba(54, 34, 27, 0.8), rgba(20, 9, 107, 0.8))',
        }}
      >
        <ul className="text-gray-300 px-10 py-100 space-y-4">
          <Chat />
          
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 0,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  chatWrapper: {
    position: 'relative',
    width: '120px',
    height: '120px',
    overflow: 'hidden',
  },
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Custom shape
    background: 'linear-gradient(45deg, rgba(69, 92, 87, 0.8), rgba(22, 9, 122, 0.8))',
    zIndex: 1,
    animation: 'moveBorder 3s linear infinite', // Smooth movement
  },
  video: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    objectFit: 'cover',
    clipPath: 'inset(12% 8% round 100% 80% 100% 20%)', // Matches the custom border shape
    zIndex: 2,
  },
};

export default CombinedComponent;




