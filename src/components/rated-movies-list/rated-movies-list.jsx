import { useEffect, useState } from "react";
import { getMoviesByUser } from "../../api/movie-api";

function RatedMoviesList({ userId }) {
    const [ratedMovies, setRatedMovies] = useState([]);

    useEffect(() => {
        getMoviesByUser(userId)
            .then((data) => {
                setRatedMovies(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [userId]);

    return (
        <>
            <h3>Rated Movies List</h3>
            <div>
                {
                    ratedMovies && ratedMovies.length > 0 ? (
                        ratedMovies.map((element, index) => {
                            return (
                                <div key={index}>
                                    {element.title}, {element.rating}
                                </div>
                            )
                        })
                    ) : (
                        <div>
                            No rated movies
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default RatedMoviesList;