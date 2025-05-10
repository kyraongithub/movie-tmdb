import React from 'react';
import type { MovieInterface } from '../../../interfaces/Movie.interface';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import LoaderSkeleton from '../../ui/Skeleton';
import useExplore from './useExplore';

const ExplorePage: React.FC = () => {
  const {
    query,
    keyword,
    setkeyword,
    isLoading,
    handleSearch,
    hasNextPage,
    isFetchingNextPage,
    ref,
    allMovies,
  } = useExplore();

  return (
    <div className="min-h-[100vh] bg-gray-900 text-white">
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Explore Movies
          </h1>

          <form onSubmit={handleSearch} className="flex gap-2 w-full">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search for movies..."
                value={keyword}
                onChange={(e) => setkeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button
              type="submit"
              className="cursor-pointer px-6 py-3 bg-primary hover:bg-primary-dark transition-colors"
            >
              Search
            </Button>
          </form>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <LoaderSkeleton width={200} height={300} />
          </div>
        ) : (
          <>
            {query === '' ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-medium mb-4">
                  Let's Explore Movies Together
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto">
                  Search for your favorite movies, discover new releases, or
                  explore trending content.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-6">
                  Search Results for:{' '}
                  <span className="text-primary">"{query}"</span>
                </h2>

                {allMovies.length === 0 ? (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium">No movies found</h3>
                    <p className="text-gray-400 mt-2">
                      Try different keywords or check back later
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                      {allMovies.map((movie: MovieInterface) => (
                        <Card
                          key={movie.id}
                          id={movie.id}
                          movie={movie}
                          className="transition-transform hover:scale-105"
                        />
                      ))}
                    </div>

                    {/* Infinite scroll trigger */}
                    <div
                      ref={ref}
                      className="h-10 flex justify-center items-center"
                    >
                      {isFetchingNextPage && (
                        <div className="text-gray-400">
                          Loading more movies...
                        </div>
                      )}
                      {!hasNextPage && allMovies.length > 0 && (
                        <div className="text-gray-400">
                          No more movies to load
                        </div>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ExplorePage;
