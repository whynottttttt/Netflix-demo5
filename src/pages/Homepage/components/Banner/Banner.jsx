import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css'
import { Container } from 'react-bootstrap';

const Banner = () => {

    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log("ddd", data)
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <Spinner animation="border" variant="danger" />
            </div>
        );
    }
    if (isError) {
        return <Alert variant='danger'>{error?.message || '영화 정보를 불러오는데 실패했습니다'}</Alert>
    }
    return (
        <div
            style={{
                backgroundImage: "url(" + `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` + ")",
            }}
            className="banner"
        >
            <Container fluid>
                <div className="text-white banner-text-area">
                    <h1>{data?.results[0].title}</h1>
                    <p>{data?.results[0].overview}</p>
                </div>
            </Container>
        </div>
    )
}

export default Banner