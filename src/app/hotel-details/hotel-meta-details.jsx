import Icon from '@/components/ui/icon';
import React from 'react';

const HotelMetaDetails = ({ hotel }) => {
  return (

    <>
    <section className="space-y-4">
      <div className="flex">
        <div className="flex-1 space-y-1">
          <h1 className="text-2xl font-bold">{hotel.name}</h1>
          <p className="text-muted-foreground">{`${hotel.contactInfo?.address},${hotel.city}`}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 px-1.5 py-1 rounded bg-gray-100 w-fit font-semibold">
        <Icon size="14" icon="gem" />
        <span className="text-xs">Company-Serviced</span>
      </div>
      <div className="flex items-center gap-2 px-2">
        <Icon icon="curve" className="-mt-4 stroke-gray-400" />
        <p>5.0 · Check-in rating &gt; Delightful experience</p>
      </div>
      <div className="text-orange-500 bg-orange-50 flex gap-1 p-2 items-center border rounded-sm">
        <Icon icon="heart" size="16" />
        <p className="text-sm font-medium">
          Located Less Than 5 Km From Medanta Hospital | Located 3 Kms From
          Omaxe Celebration Mall
        </p>
      </div>
    </section>

 
    
    
    </>
  );
};

export default HotelMetaDetails;
