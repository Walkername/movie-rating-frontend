import { useParams } from "react-router-dom";
import NavigationBar from "../../components/navigation/navigation";
import MovieDetails from "../../components/movie-details/movie-details";
import RateMovie from "../../components/rate-movie/rate-movie";
import DeleteButton from "../../components/delete-button/delete-button";
import { useEffect, useState } from "react";
import { getMovie } from "../../api/movie-api";

function MoviePage() {
    const { id } = useParams(); // Get the movie ID from the URL parameters
    const [movie, setMovie] = useState(null); // State for the movie data

    useEffect(() => {
        getMovie(id)
            .then((data) => {
                setMovie(data); // Set the movie data
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]); // Dependency array ensures this runs whenever `id` changes

    return (
        <>
            <NavigationBar />
            <div className="page-content-container">
                <div className="page-content">
                    {
                        movie == null
                            ? <h1>Error: Movie was not found</h1>
                            : <div>
                                <DeleteButton id={id} />

                                <MovieDetails movie={movie} />

                                <RateMovie movieId={id} />
                            </div>
                    }
                </div>
            </div>

        </>
    );
}

export default MoviePage;