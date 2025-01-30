import { useState } from "react";
import { updateMovie } from "../../api/movie-api";

function MovieDetailsEdit({ movie }) {
    const [formData, setFormData] = useState({
        title: movie.title,
        releaseYear: movie.releaseYear,
        description: movie.description
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleUpdate = (evt) => {
        evt.preventDefault();

        updateMovie(movie.id, formData)
            .then((data) => {
                console.log("Movie updated successfully:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })

        window.location.reload();
    }

    return (
        <div>
            <form>
                <label>Title:</label>
                <br></br>
                <input type="text" name="title" placeholder="title" value={formData.title}
                    onChange={handleChange} required
                />
                <br></br>

                <label>Release year:</label>
                <br></br>
                <input type="number" name="releaseYear" min="0" placeholder="2000" value={formData.releaseYear}
                    onChange={handleChange}
                    required
                />
                <br></br>

                <label>Description:</label>
                <br></br>
                <textarea type="text" name="description" rows="5" placeholder="..." value={formData.description}
                    onChange={handleChange}
                    required
                >
                </textarea>
                <br></br>

                <input type="submit" value="Update" onClick={handleUpdate} />
            </form>
        </div>
    )
}

export default MovieDetailsEdit;