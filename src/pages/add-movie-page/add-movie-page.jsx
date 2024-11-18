import NavigationBar from "../../components/navigation/navigation";

function AddMoviePage() {
    return (
        <div>
            <NavigationBar />
            <div>
                <h1>Add Movie Page</h1>
            </div>

            <div className="page-content-container">
                <div className="page-content">
                    <form >
                        <label>Movie Title:</label>
                        <br></br>
                        <input type="text" placeholder="Title" />
                        <br></br>

                        <label>Release Year:</label>
                        <br></br>
                        <input type="text" placeholder="example, 2000" />
                        <br></br>

                        <input type="submit" value="Add" />

                    </form>
                </div>
            </div>

        </div>
    );
}

export default AddMoviePage;