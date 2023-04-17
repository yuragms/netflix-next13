// import useSWR from 'swr';
// import fetcher from '../libs/fetcher';

// const useMovieList = () => {
//   const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
//     revalidateIfStale: false,
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false,
//   });

//   return {
//     data,
//     error,
//     isLoading,
//   };
// };

// export default useMovieList;

import useSwr from 'swr';
import fetcher from '@/libs/fetcher';

const useMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
};

export default useMovies;
