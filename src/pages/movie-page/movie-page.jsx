import { Navigate, useParams } from "react-router-dom";
import NavigationBar from "../../components/navigation/navigation";
import { useEffect, useState } from "react";

function MoviePage() {
    const { id } = useParams(); // Get the movie ID from the URL parameters
    const [movie, setMovie] = useState(null); // State for the movie data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for errors

    useEffect(() => {
        const url = `${process.env.REACT_APP_MOVIE_SERVICE_URL}/${id}`; // Replace with your API endpoint

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch movie");
            }
            return response.json();
        })
        .then((data) => {
            setMovie(data); // Set the movie data
            setLoading(false); // Stop loading
        })
        .catch((error) => {
            console.error("Error fetching movie:", error);
            setError(error.message); // Set the error message
            setLoading(false); // Stop loading
        });
    }, [id]); // Dependency array ensures this runs whenever `id` changes

    if (loading) {
        return <div>Loading movie...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return !movie
        ? (<Navigate to="/" />)
        : (
            <body>
                <NavigationBar />
                <div>
                    <h1>Movie: {movie.title} ({movie.releaseYear})</h1>
                </div>
                <div className="page-content-container">
                    <div className="page-content">
                        <div>
                            <h3>Description</h3>
                            <div>
                                {movie.description}
                            </div>

                            <div>
                                <b>Release year:</b> {movie.releaseYear}
                            </div>
                            <div>
                                <b>Average rating:</b> {movie.averageRating}
                            </div>
                        </div>

                    </div>
                </div>
            </body>
        );
}

export default MoviePage;