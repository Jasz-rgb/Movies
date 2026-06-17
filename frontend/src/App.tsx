import { Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import Nav from './pages/Nav';
// import LoaderScreen from './components/skeletons/Loader';

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <LoaderScreen />;
  // }

  return (
    <Routes>
      <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/nav' element={<Nav/>}/>
        </Route>
    </Routes>
  );
}

export default App;