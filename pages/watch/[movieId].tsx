import { useRouter } from 'next/router';
import useMovie from '../../hooks/useMovie';

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-fill p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70"></nav>
    </div>
  );
};

export default Watch;
