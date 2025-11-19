import React from 'react';
import { Button } from '@/components/ui/button';
import { SERVICE_LIST } from '@/config/app.config';
import Icon from '../ui/icon';
import { Link } from 'react-router';

import { PATHS } from '@/config/path.config';

const Header = () => {
  return (
    <header className="bg-brand py-2">
      <div className="container flex justify-between items-center">
        <div id="logo-wrapper">
          <Link to="/" aria-label="Go to Booking.com">
            <img
              width={144}
              height={24}
              src="/assets/booking.com.svg"
              alt="Logo of Booking.com"
            />
          </Link>
        </div>
        <div id="auth" className="flex gap-2 justify-center items-center">
          <Button className="bg-white cursor-pointer border-primary text-primary rounded-sm hover:bg-white/95 ">
            <Link to={PATHS.SIGNUP}>Register</Link>
          </Button>
          <Button className="bg-white cursor-pointer border-primary text-primary rounded-sm hover:bg-white/95 ">
            <Link to={PATHS.SIGNIN}>Login</Link>
          </Button>
        </div>
      </div>
      <div className="container flex gap-1 overflow-x-auto scrollbar whitespace-nowrap">
        {SERVICE_LIST.map((items) => (
          <Button
            className={`bg-transparent shadow-none font-normal rounded-full hover:bg-white/10 cursor-pointer flex items-center justify-between gap-2 px-6 h-11  ${
              items.active && 'border border-white bg-white/20 '
            }`}
            key={items.id}
          >
            <Icon icon={items.icon} />
            {items.title}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Header;
