import { useState } from "react";
import NavigationBar from "../../components/navigation/navigation";
import { addMovie } from "../../api/movie-api";

function AddMoviePage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        releaseYear: '',
        averageRating: 0.0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        addMovie(formData)
            .then((data) => {
                console.log("Movie added successfully:", data);
                alert("Movie added successfully!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error adding movie");
            });
    };

    return (
        <>
            <NavigationBar />
            <div>
                <h1>Add Movie In DB</h1>
            </div>

            <div className="page-content-container">
                <div className="page-content">
                    <form className="new-movie-form" onSubmit={handleSubmit}>
                        <label>Movie Title:</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <label>Description:</label>
                        <br />
                        <textarea
                            rows="3"
                            placeholder="..."
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                        <br />

                        <label>Release Year:</label>
                        <br />
                        <input
                            type="number"
                            min="0"
                            placeholder="example, 2000"
                            name="releaseYear"
                            value={formData.releaseYear}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>

        </>
    );
}

export default AddMoviePage;