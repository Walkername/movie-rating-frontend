import { useEffect, useState } from 'react';
import NavigationBar from '../../components/navigation/navigation';
import { useNavigate } from 'react-router-dom';

function MainPage() {

    const [movies, setMovies] = useState([]); // State to store the list of movies
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const url = `${process.env.REACT_APP_MOVIE_SERVICE_URL}`; // Replace with your API endpoint

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch movies");
            }
            return response.json(); // Parse JSON response
        })
        .then((data) => {
            setMovies(data); // Update movies state with the fetched data
            setLoading(false); // Set loading to false
        })
        .catch((error) => {
            console.error("Error fetching movies:", error);
            setError(error.message); // Set error message
            setLoading(false); // Set loading to false
        });
    }, []); // Empty dependency array ensures this runs once when the component mounts

    const navigate = useNavigate();

    const handleNavigate = (target) => {
        navigate(target);
    }

    return (
        <>
            <NavigationBar />
            <div>
                <h1>Main Page</h1>
            </div>

            <div className="page-content-container">
                <div className="page-content">
                    <div>
                        <h2 style={{textAlign: "center"}}>Movie List</h2>
                        <div>
                            {
                                loading ? (
                                    <div>Loading movies...</div>
                                ) : error ? (
                                    <div>Error: {error}</div>
                                ) :
                                movies.map((movie, index) => {
                                    let href = "/movies/" + movie.id;
                                    return (
                                        <div key={index} className="movie-div" onClick={() => handleNavigate(href)}>
                                            {index + 1}: {movie.title} ({movie.releaseYear})
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MainPage;