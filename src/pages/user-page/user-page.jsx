import NavigationBar from "../../components/navigation/navigation";


function UserPage() {
    let username = "Some user";
    let description = "I like movies very much!"
    let favouriteMovie = "Interstellar";
    let averageRating = 7.8;
    const ratedMovies = [
        { title: "Interstellar", rating: 9.8 },
        { title: "Inception", rating: 8.1 }
    ];

    return (
        <div>
            <NavigationBar />
            <div>
                <h1>User Page</h1>
            </div>
            <div className="form-field">
                <div>
                    <h2>{username}</h2>

                    <h3>Description</h3>
                    <div>
                        {description}
                    </div>

                    <h3>Favourite movie</h3>
                    <div>
                        {favouriteMovie}
                    </div>

                    <h3>Average rating</h3>
                    <div>
                        {averageRating}
                    </div>

                    <h3>Movie Rated List</h3>
                    <div>
                        {
                            ratedMovies.map((element, index) => {
                                return (
                                    <div key={index}>
                                        {element.title}, {element.rating}
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>

        </div>
    );
}

export default UserPage;