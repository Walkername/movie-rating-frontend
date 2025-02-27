import { useParams } from "react-router-dom";
import NavigationBar from "../../components/navigation/navigation";
import MovieDetails from "../../components/movie-details/movie-details";
import RateMovie from "../../components/rate-movie/rate-movie";
import DeleteButton from "../../components/delete-button/delete-button";
import { useEffect, useState } from "react";
import { getMovie } from "../../api/movie-api";
import MovieDetailsEdit from "../../components/movie-details-edit/movie-details-edit";

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
    }, [id]); // this runs whenever `id` changes

    // Handle edit button
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    return (
        <>
            <NavigationBar />
            <div className="page-content-container">
                <div className="page-content">
                    {
                        movie == null
                            ? <h1>Error: Movie was not found</h1>
                            : <div>
                                {
                                    !isEditing
                                        ? <>
                                            <MovieDetails movie={movie} />
                                            <RateMovie movieId={id} />
                                        </>
                                        : <>
                                            <DeleteButton id={id} />
                                            <MovieDetailsEdit movie={movie} />
                                        </>

                                }
                            </div>
                    }
                    <div>
                        <button onClick={handleEdit}>
                            {isEditing ? "Back" : "Edit"}
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MoviePage;