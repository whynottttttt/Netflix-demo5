import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.style.css";
import CustomPagination from "../../common/Pagination/CustomPagination";

// 경로 2가지
// navbar에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련 된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때 마다 page 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const keyword = query.get("q");
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  // keyword가 바뀌면 페이지 초기화
  useEffect(() => {
    setPage(1);
  }, [keyword]);

  // query params가 바뀔 때 필터 초기화
  useEffect(() => {
    const currentKeyword = query.get("q");
    if (!currentKeyword) {
      setPage(1);
      setSortOption("default");
      setSelectedGenre(null);
      navigate("/movies");
    } else {
      setPage(1);
      setSortOption("default");
      setSelectedGenre(null);
    }
  }, [query, navigate]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  const noResultsMessage = (
    <Alert variant="danger" className="text-center">
      검색 결과가 없습니다.
    </Alert>
  );

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          {data?.results.length === 0 && noResultsMessage}

          <Row className="g-4 mb-4">
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={6}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>

          <CustomPagination
            page={page}
            setPage={setPage}
            totalPages={data?.total_pages}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;