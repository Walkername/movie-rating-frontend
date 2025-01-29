import { useEffect, useState } from "react";
import { getUsers, getUsersRatedMovie } from "../../api/user-api";
import { addRating, updateRating } from "../../api/rating-api";

function RateMovie({ movieId }) {
    // USERS
    const [users, setUsers] = useState([]); // State for the movie data
    useEffect(() => {
        getUsers()
            .then((data) => {
                setUsers(data); // Set the movie data
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    }, []);

    // RATING FORM
    const [formData, setFormData] = useState({
        userId: '',
        movieId: movieId,
        rating: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (usersR.some(user => user.userId === parseInt(formData.userId))) {
            const ratingId = usersR.find(user => user.userId === parseInt(formData.userId)).ratingId;
            updateRating(ratingId, formData)
                .then((data) => {
                    console.log("Rating updated successfully:", data);
                    alert("Rating updated successfully!")
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Error updated rating");
                })
        } else {
            addRating(formData)
                .then((data) => {
                    console.log("Rating added successfully:", data);
                    alert("Rating added successfully!");
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Error adding rating");
                });
        }
    };

    // ALL USERS THAT RATED THIS MOVIE
    const [usersR, setUsersR] = useState([]); // State for the movie data

    useEffect(() => {
        getUsersRatedMovie(movieId)
            .then((data) => {
                setUsersR(data); // Set the movie data
            })
            .catch((error) => {
                console.error(error);
            });
    }, [movieId]);

    return (
        <div>
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
                        type="number"
                        max="10"
                        min="0"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        placeholder="0"
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
    )
}

export default RateMovie;