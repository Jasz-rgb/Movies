import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import MovieDetailsPage from './pages/movie/MovieDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LoaderScreen from './components/skeletons/Loader';

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
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Route>
    </Routes>
  );
}

export default App;