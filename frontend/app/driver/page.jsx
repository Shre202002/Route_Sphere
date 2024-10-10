'use client'
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 28.644800, // Example Latitude
  lng: 77.216721, // Example Longitude
};

const page = () => {
  return (
    <div className="flex flex-col items-center p-4 font-sans min-h-screen bg-custom-gradient flex flex-col">
      {/* Top Section */}
      <div className="w-full max-w-7xl flex flex-col items-center mb-8 mt-40">
        <div className="flex justify-between w-full max-w-xl mb-4">
          <div className=''>
            <h2 className="text-xl font-bold border-4 border-red-700">Start Point</h2>
            <p className="text-lg">Anand Vihar</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Destination</h2>
            <p className="text-lg">Kashmiri Gate</p>
          </div>
        </div>

        <div className="w-full max-w-4xl h-96 mt-4 ">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Map will render here */}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full flex flex-col md:flex-row justify-between max-w-3xl p-6 bg-gray-100 rounded-lg">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-center">
            <div className="flex items-center mb-2">
              <img src="/bus-icon.png" alt="Bus Icon" className="w-8 h-8 mr-2" />
              <p className="text-lg font-semibold">Bus - 02</p>
            </div>
            <p className="text-green-500 font-semibold">2.3 km away Kashmiri Gate</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="flex items-center mb-2">
              {/* <img src="/driver-icon.png" alt="Driver Icon" className="w-8 h-8 mr-2" /> */}
              <p className="text-lg font-semibold text-red-500">Driver ID - 1023</p>
            </div>
            <p className="font-semibold">Dinesh Sharma</p>
          </div>
        </div>
      </div>
      <div className="mt-auto flex justify-center">
        <button 
        className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
          Alternative Route
        </button>
      </div>
    </div>
  );
};

export default page;
