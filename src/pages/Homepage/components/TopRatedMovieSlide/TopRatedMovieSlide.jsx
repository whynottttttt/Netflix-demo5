import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies'
import { Alert } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import MovieCard from '../../../../common/MovieCard/MovieCard';


const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery()

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return (
        <div>
            <MovieSlider title="Top Rated Movies"
                movies={data.results}
                responsive={responsive}
                type="toprated"
            >
                {data.results.map((movie, index) => <MovieCard movie={movie} key={index} />)}
            </MovieSlider>
        </div>
    )
}

export default TopRatedMovieSlide