import React from 'react';
import { useParams } from 'react-router-dom';
import type { DetailParams } from './Detail.interface';
import useDetail from './useDetail';
import LoaderSkeleton from '../../ui/Skeleton';

const DetailPage: React.FC = () => {
  const { id } = useParams<DetailParams>();
  const { detailMovie, isLoading, formatRuntime } = useDetail(Number(id));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <LoaderSkeleton width={200} height={300} />
      </div>
    );
  }

  if (!detailMovie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>⚠️</p>
        <h2 className="text-2xl font-bold">Movie Not Found</h2>
        <p className="text-gray-400 mt-2">
          The movie you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative h-64 md:h-96 lg:h-[32rem] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detailMovie.backdrop_path})`,
            filter: 'brightness(0.5)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-48 h-72 md:w-64 md:h-96 lg:w-80 lg:h-[28rem] shadow-xl rounded-lg overflow-hidden border-2 border-gray-700 bg-gray-900">
            <img
              src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`}
              alt={detailMovie.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 mt-6 md:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              {detailMovie.title}
              {detailMovie.adult && (
                <span className="ml-3 text-xs bg-red-500 px-2 py-1 rounded-md">
                  18+
                </span>
              )}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
              <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                <p>⭐</p>
                <span>{detailMovie.vote_average.toFixed(1)}</span>
                <span className="text-gray-500 ml-1">
                  ({detailMovie.vote_count})
                </span>
              </div>

              <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                <p>⏱️</p>
                <span>{formatRuntime(detailMovie.runtime)}</span>
              </div>

              <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                <p>📅</p>
                <span>
                  {new Date(detailMovie.release_date).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                <p>📍</p>
                <span>{detailMovie.origin_country.join(', ')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {detailMovie.genres.map((genre: any) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {detailMovie.tagline && (
              <p className="italic text-gray-300 mb-4 text-lg">
                "{detailMovie.tagline}"
              </p>
            )}

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {detailMovie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Status
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span>{detailMovie.status}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Release Date</span>
                <span>
                  {new Date(detailMovie.release_date).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Language
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Original Language</span>
                <span>
                  {
                    detailMovie.spoken_languages.find(
                      (lang: any) =>
                        lang.iso_639_1 === detailMovie.original_language
                    )?.english_name
                  }
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Production
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 block mb-2">Countries</span>
                <div className="flex flex-wrap gap-2">
                  {detailMovie.production_countries.map((country: any) => (
                    <span
                      key={country.iso_3166_1}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {country.name}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        {detailMovie.homepage && (
          <div className="mt-12 text-center">
            <a
              href={detailMovie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg transition-colors text-lg font-medium"
            >
              Official Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
