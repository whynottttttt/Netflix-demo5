import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage/Homepage';
import { MoviePage } from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import AppLayout from './layout/AppLayout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

// 홈페이지 /
// 영화 전체 보여주는 페이지 (서치) /movies
// 영화 디테일 페이지 /movies/:id
// 추천 영화 /movies/:id/recommandation
// 리뷰 /movie/:id/reviews
function App() {
  return (

    <Routes>
      <Route path="/" element={<AppLayout />} > //user화면
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>


      <Route path="*" element={<NotFoundPage />} />
    </Routes>


  );
}

export default App;
