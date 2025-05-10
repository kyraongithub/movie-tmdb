import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between p-4">
      <p className="text-2xl">st⭐r movie</p>

      <div className="flex gap-5">
        <a className="hover:scale-110 transition-all" href="/">
          Movie List
        </a>
        <a className="hover:scale-110 transition-all" href="/explore">
          Explore
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
