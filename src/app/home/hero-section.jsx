import { Button } from '@/components/ui/button';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[372px] bg-black ">
      <img
        className="absolute size-full z-[1] mx-auto object-cover inset-0"
        src="./assets/hero-image-1440.jpeg"
      />
      <div className="z-[2] relative container  space-y-2">
        <h1 className="mt-6 taxt-4xl font-extrabold leading-tight text-white md:text-5xl">
          Travel has never
          <br />
          felt this cosy
        </h1>
        <p className="text-xl font-medium leading-snug text-white md:text-2xl">
          Book an entire place all for yourself.
        </p>
        <Button className="mt-9  cursor-pointer h-12 px-4 text-base font-semibold">Discover Holiday Rentals</Button>
      </div>
    </section>
  );
};

export default HeroSection;
