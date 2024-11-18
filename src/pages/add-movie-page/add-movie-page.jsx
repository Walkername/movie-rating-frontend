import NavigationBar from "../../components/navigation/navigation";

function AddMoviePage() {
    return (
        <body>
            <NavigationBar />
            <div>
                <h1>Add Movie In DB</h1>
            </div>

            <div className="page-content-container">
                <div className="page-content">
                    <form >
                        <label>Movie Title:</label>
                        <br></br>
                        <input type="text" placeholder="Title" required/>
                        <br></br>

                        <label>Description:</label>
                        <br></br>
                        <textarea rows="3" placeholder="..."></textarea>
                        <br></br>

                        <label>Release Year:</label>
                        <br></br>
                        <input type="text" placeholder="example, 2000" required/>
                        <br></br>

                        <input type="submit" value="Add" />

                    </form>
                </div>
            </div>

        </body>
    );
}

export default AddMoviePage;