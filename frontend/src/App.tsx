import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import MovieDetailsPage from './pages/movie/MovieDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LoaderScreen from './components/skeletons/Loader';
import PopularPage from './pages/PopularPage';
import UpcomingPage from './pages/Upcoming';
import TopRatedPage from './pages/TopRatedPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <Routes>
      <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Route>
    </Routes>
  );
}

export default App;