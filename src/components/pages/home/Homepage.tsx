import type React from 'react';
import useHome from './useHome';

const Homepage: React.FC = () => {
  const { movieList } = useHome();
  console.log(movieList);
  return <div>hello world</div>;
};

export default Homepage;
