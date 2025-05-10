import React from 'react';
import type { CategoryParams } from './Category.interface';
import { useParams } from 'react-router-dom';
import useCategory from './useCategory';
import Card from '../../ui/Card';
import type { MovieInterface } from '../../../interfaces/Movie.interface';
import ReactPaginate from 'react-paginate';
import LoaderSkeleton from '../../ui/Skeleton';

const CategoryPage: React.FC = () => {
  const { category } = useParams<CategoryParams>();
  const { movieList, totalPages, setpage, isLoading, formatCategoryName } =
    useCategory(category || 'now_playing');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold">
          {formatCategoryName(category)} Movies
        </h1>
        <p className="text-gray-400 mt-2">
          Browse our collection of {formatCategoryName(category).toLowerCase()}{' '}
          movies
        </p>
      </header>

      <main className="py-8 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <LoaderSkeleton width={200} height={300} />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {movieList?.map((movie: MovieInterface) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  movie={movie}
                  className="transition-transform hover:scale-105 hover:z-10"
                />
              ))}
            </div>

            {/* Pagination */}
            {movieList && totalPages > 1 && (
              <div className="mt-10 flex justify-center">
                <ReactPaginate
                  pageCount={totalPages}
                  breakLabel={<span className="mx-2">...</span>}
                  nextLabel={
                    <span className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                      Next &gt;
                    </span>
                  }
                  onPageChange={({ selected }) => setpage(selected + 1)}
                  previousLabel={
                    <span className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                      &lt; Previous
                    </span>
                  }
                  pageClassName="mx-1"
                  pageLinkClassName="block px-3 py-1 rounded-md hover:bg-gray-800"
                  activeClassName="bg-primary hover:bg-primary-dark"
                  activeLinkClassName="font-bold"
                  containerClassName="flex items-center space-x-2"
                  disabledClassName="opacity-50 cursor-not-allowed"
                  renderOnZeroPageCount={null}
                />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
