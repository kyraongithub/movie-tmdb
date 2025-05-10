import React from 'react';
import type { CategoryParams } from './Category.interface';
import { useParams } from 'react-router-dom';
import useCategory from './useCategory';
import Card from '../../ui/Card';
import type { MovieInterface } from '../../../interfaces/Movie.interface';
import LoaderSkeleton from '../../ui/Skeleton';

const CategoryPage: React.FC = () => {
  const { category } = useParams<CategoryParams>();
  const {
    allMovies,
    isLoading,
    formatCategoryName,
    hasNextPage,
    isFetchingNextPage,
    ref,
  } = useCategory(category || 'now_playing');

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
              {allMovies.map((movie: MovieInterface) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  movie={movie}
                  className="transition-transform hover:scale-105 hover:z-10"
                />
              ))}
            </div>

            <div ref={ref} className="h-10 flex justify-center items-center">
              {isFetchingNextPage && (
                <div className="text-gray-400">Loading more movies...</div>
              )}
              {!hasNextPage && allMovies.length > 0 && (
                <div className="text-gray-400">No more movies to load</div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
