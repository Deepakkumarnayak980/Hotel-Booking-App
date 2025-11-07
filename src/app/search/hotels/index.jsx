import React from 'react';
import HotelCard from './components/hotel-card';

const Hotels = ({ isLoading, data = [], error }) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || 'Something went wrong'}</p>;
  if (!data.length) return <p>No hotels found.</p>;

  return (
    <div className="space-y-4">
      {data.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </div>
  );
};

export default Hotels;
