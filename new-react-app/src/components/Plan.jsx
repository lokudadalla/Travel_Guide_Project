import React from "react";


const PlanYourTrip = () => {
  return (
    <div id="destinations" className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      {/* Left Section - Images */}
      <div className="grid grid-cols-2 gap-2">
        <img
          src="https://cdn.shopify.com/s/files/1/0875/1624/articles/Sri_Lanka_1400x.progressive.jpg?v=1571077290"
          alt="Pinnawala Elephant Orphanage"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://i2-prod.mirror.co.uk/incoming/article12258712.ece/ALTERNATES/s1227b/Sri-Lanka-Galle-Unawatuna-beach.jpg"
          alt="Beach"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://www.thrillophilia.com/blog/wp-content/uploads/2017/11/Nuwara-Eliya.jpg"
          alt="Train Ride"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://lp-cms-production.imgix.net/2019-06/54951864.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
          alt="Waterfall"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section - Text */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Plan Your Next Trip</h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          laudantium.
        </p>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugit vero
          doloremque recusandae repellendus.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200">
            Learn More
          </button>
          <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;
