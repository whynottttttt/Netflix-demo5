import React from 'react'
import { UpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import { Alert } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import MovieCard from '../../../../common/MovieCard/MovieCard';


const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = UpcomingMoviesQuery()

    if (isLoading) {
        return <h1></h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return (
        <div>
            <MovieSlider title="Upcoming Movies"
                movies={data.results}
                responsive={responsive}
                type="upcoming"
            >
                {data.results.map((movie, index) => <MovieCard movie={movie} key={index} />)}
            </MovieSlider>
        </div>
    )
}

export default UpcomingMovieSlide