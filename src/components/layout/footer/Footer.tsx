import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center p-4">
      &copy;code.kyra {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
