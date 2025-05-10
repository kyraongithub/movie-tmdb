import type React from 'react';
import useHome from './useHome';
import Select from '../../ui/Select/Select';
import { CATEGORY_SELECT } from './constants';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import type { MovieInterface } from '../../../interfaces/Movie.interface';

const Homepage: React.FC = () => {
  const { movieList, category, setcategory } = useHome();

  // todo (delete when done)
  // create component for pagination

  return (
    <div>
      <Select
        options={CATEGORY_SELECT}
        value={category}
        onChange={setcategory}
      />

      <Input type="text" placeholder="Search" />
      <Button>Search</Button>

      {movieList?.map((movie: MovieInterface) => (
        <Card key={movie.id} title={movie.title} />
      ))}
    </div>
  );
};

export default Homepage;
