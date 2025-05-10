import type React from 'react';
import useHome from './useHome';
import Select from '../../ui/Select/Select';
import { CATEGORY_SELECT } from './constants';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import type { MovieInterface } from '../../../interfaces/Movie.interface';
import ReactPaginate from 'react-paginate';

const Homepage: React.FC = () => {
  const { movieList, category, setcategory, totalPages, setpage } = useHome();

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
      {movieList && (
        <ReactPaginate
          pageCount={totalPages}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={({ selected }) => setpage(selected + 1)}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default Homepage;
