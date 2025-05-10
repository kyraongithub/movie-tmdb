import React from 'react';
import ReactPaginate from 'react-paginate';
import type { MovieInterface } from '../../../interfaces/Movie.interface';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import useExplore from './useExplore';

const Explorepage: React.FC = () => {
  const {
    movieList,
    query,
    setquery,
    totalPages,
    setpage,
    keyword,
    setkeyword,
  } = useExplore();

  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setkeyword(e.target.value)}
      />
      <Button onClick={() => setquery(keyword)}>Search</Button>
      {query === '' && <p>let's explore movies with us</p>}
      {query &&
        movieList?.map((movie: MovieInterface) => (
          <Card key={movie.id} id={movie.id} movie={movie} />
        ))}
      {query && movieList && (
        <ReactPaginate
          pageCount={totalPages}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={({ selected }) =>
            setpage(selected === 0 ? 1 : selected)
          }
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default Explorepage;
