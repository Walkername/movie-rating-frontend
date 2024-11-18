import { Navigate, useParams } from "react-router-dom";
import NavigationBar from "../../components/navigation/navigation";

function MoviePage({ movies }) {
    const paramId = parseInt(useParams().id);
    const movie = movies.find(movie => movie.id === paramId);

    return !movie
        ? (<Navigate to="*" />)
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