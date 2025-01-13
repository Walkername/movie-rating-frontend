import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../../components/navigation/navigation";
import { useEffect, useState } from "react";

function MoviePage() {
    const { id } = useParams(); // Get the movie ID from the URL parameters
    const [movie, setMovie] = useState(null); // State for the movie data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for errors

    const navigate = useNavigate();

    useEffect(() => {
        const url = `${process.env.REACT_APP_MOVIE_SERVICE_URL}/movies/${id}`; // Replace with your API endpoint

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
                navigate("/");
            });
    }, [id, navigate]); // Dependency array ensures this runs whenever `id` changes

    // USERS

    const [users, setUsers] = useState([]); // State for the movie data

    useEffect(() => {
        const url = `${process.env.REACT_APP_USER_SERVICE_URL}/users`; // Replace with your API endpoint

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
                setUsers(data); // Set the movie data
            })
            .catch((error) => {
                console.error("Error fetching movie:", error);
            });
    }, []);

    // RATING FORM

    const [formData, setFormData] = useState({
        userId: '',
        movieId: id,
        rating: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        let url = `${process.env.REACT_APP_RATING_SERVICE_URL}/ratings/add`; // Replace with your desired endpoint
        let sendMethod = "POST";

        if (usersR.some(user => user.userId === parseInt(formData.userId))) {
            sendMethod = "PATCH";
            const ratingId = usersR.find(user => user.userId === parseInt(formData.userId)).ratingId;
            url = `${process.env.REACT_APP_RATING_SERVICE_URL}/ratings/edit/${ratingId}`;
        }

        fetch(url, {
            method: sendMethod,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to add the user");
            })
            .then((data) => {
                console.log("User added successfully:", data);
                alert("User added successfully!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error adding user");
            });
    };

    // ALL USERS THAT RATED THIS MOVIE

    const [usersR, setUsersR] = useState([]); // State for the movie data

    useEffect(() => {
        const url = `${process.env.REACT_APP_USER_SERVICE_URL}/users/movie/${id}`; // Replace with your API endpoint

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
                setUsersR(data); // Set the movie data
            })
            .catch((error) => {
                console.error("Error fetching movie:", error);
            });
    }, [id]);

    // DELETE MOVIE

    const handleDelete = () => {
        const url = `${process.env.REACT_APP_MOVIE_SERVICE_URL}/movies/delete/${id}`

        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to delete the movie");
            })
            .then((data) => {
                console.log("Movie deleted successfully:", data);
                alert("Movie deleted successfully:");
                navigate("/");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error deleting movie");
            });
    }

    if (loading) {
        return <div>Loading movie...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return !movie
        ? (<Navigate to="/" />)
        : (
            <>
                <NavigationBar />
                <div>
                    <h1>Movie: {movie.title} ({movie.releaseYear})</h1>
                </div>
                <div className="page-content-container">
                    <div className="page-content">
                        <div>
                            <div>
                                <button onClick={handleDelete}>Delete</button>
                            </div>

                            <h3>Description</h3>
                            <div>
                                {movie.description}
                            </div>
                            <div>
                                <b>Release year:</b> {movie.releaseYear}
                            </div>
                            <div>
                                <b>Average rating:</b> {
                                    movie.averageRating !== 0.0
                                        ? movie.averageRating
                                        : <span>no ratings</span>
                                }
                            </div>
                            <div>
                                <b>Scores:</b> {movie.scores}
                            </div>

                            <div>
                                <form onSubmit={handleSubmit}>
                                    <select value={formData.userId} name="userId" onChange={handleChange} required>
                                        <option value="">Choose user</option>
                                        {
                                            users.map((user, index) => {
                                                return (
                                                    <option key={index} value={user.id}>{user.username}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    :
                                    <input
                                        type="text"
                                        name="rating"
                                        value={formData.rating}
                                        onChange={handleChange}
                                        placeholder="example, 8.3"
                                        required
                                    />
                                    <input type="submit" value="Rate" />
                                </form>
                            </div>

                            <h3>Users that rated the movie:</h3>
                            {
                                usersR.map((user, index) => {
                                    return (
                                        <div key={index}>{user.username} : {user.rating}</div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </>
        );
}

export default MoviePage;