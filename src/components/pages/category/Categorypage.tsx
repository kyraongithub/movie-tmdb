import React from 'react';
import type { CategoryParams } from './Category.interface';
import { useParams } from 'react-router-dom';
import useCategory from './useCategory';
import Card from '../../ui/Card';
import type { MovieInterface } from '../../../interfaces/Movie.interface';
import ReactPaginate from 'react-paginate';

const Categorypage: React.FC = () => {
  const { category } = useParams<CategoryParams>();
  const { movieList, totalPages, setpage } = useCategory(
    category || 'now_playing'
  );

  return (
    <div>
      {movieList?.map((movie: MovieInterface) => (
        <Card key={movie.id} id={movie.id} movie={movie} />
      ))}
      {movieList && (
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

export default Categorypage;
