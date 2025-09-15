import React from 'react';

const HotelPolicy = ({ hotelPolicy }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Hotel Policy</h2>
      <div className="space-y-4">
        <div className="flex gap-4 mx-5">
          {/* Check-In Section */}
          <div className="border-r border-gray-300 pr-4">
            <span className="text-sm">Check-In</span>
            <div
              className="mt-3 relative px-4 py-1 border border-gray-700 before:absolute before:w-4 before:h-4 
              before:rotate-[44deg] before:bg-background before:-top-2 before:left-2 before:border-t before:border-l before:border-border"
            >
              <p className="text-lg font-semibold">{hotelPolicy.checkIn}</p>
            </div>
          </div>

          {/* Check-Out Section */}
          <div className="border-r border-gray-300 pr-4">
            <span className="text-sm">Check-Out</span>
            <div
              className="mt-3 relative px-4 py-1 border border-gray-700 before:absolute before:w-4 before:h-4 
              before:rotate-[44deg] before:bg-background before:-top-2 before:left-2 before:border-t before:border-l before:border-border"
            >
              <p className="text-lg font-semibold">{hotelPolicy.checkout}</p>
            </div>
          </div> 
        </div>

        <ul className='list-disc list-inside'> 
          {hotelPolicy.rules.map((rule,index) =>(
            <li key={index}>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HotelPolicy;
