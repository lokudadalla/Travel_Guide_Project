import img1 from "../assets/images/img1.jpg";
import NavigationButton2 from './NavButton2.jsx';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src={img1}
        alt="Colombo skyline at night reflecting on the water"
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-slowZoom"
        loading="eager"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-1000/90 to-black/40"></div>

       {/* Content */}
       <div className="relative z-10 flex h-full items-center justify-center">
         <div className="mx-auto max-w-4xl px-6 text-center animate-fadeInUp">
           {/* Title */}
           <h1 className="text-balance text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] leading-tight">
             Welcome to Sri Lanka
           </h1>
        <p className="mx-auto mt-3 max-w-3xl text-lg md:text-2xl text-gray-300 drop-shadow-sm soft-highlight">This is your Dream Destination</p>
        {/* <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
          Explore
        </button> */}
        <NavigationButton2 />
      </div>
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="animate-bounce rounded-full border border-white/50 px-4 py-2 text-xs text-white/100">
          Scroll
        </span>
      </div>
    </div>
  );
};

export default Hero;














// import img1 from "../assets/images/img1.jpg";
// import NavigationButton2 from "./NavButton2.jsx";

// const Hero = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background image with subtle zoom effect */}
//       <img
//         src={img1}
//         alt="Colombo skyline at night reflecting on the water"
//         className="absolute inset-0 h-full w-full object-cover scale-105 animate-slowZoom"
//         loading="eager"
//         fetchpriority="high"
//       />

//       {/* Dark cinematic gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-1000/90 to-black/40"></div>

//       {/* Content */}
//       <div className="relative z-10 flex h-full items-center justify-center">
//         <div className="mx-auto max-w-4xl px-6 text-center animate-fadeInUp">
//           {/* Title */}
//           <h1 className="text-balance text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] leading-tight">
//             Welcome to Sri Lanka
//           </h1>

//           {/* Subtitle */}
//           <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg md:text-2xl text-blue-300 drop-shadow-sm">
//             Your dream destination with golden beaches, lush tea country, and vibrant cities await.
//           </p>


//           {/* Button */}
//           <div className="mt-8 flex items-center justify-center">
//             <NavigationButton2 className="rounded-lg bg-amber-500 px-8 py-3 text-black font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 active:translate-y-0" />
//           </div>
//         </div>
//       </div>

//       {/* Soft glow effect (optional subtle decor) */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.05),transparent_60%)]"></div>

//       {/* Scroll cue */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
//         <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
//           Scroll
//         </span>
//       </div>
//     </section>
//   );
// };

// export default Hero;
