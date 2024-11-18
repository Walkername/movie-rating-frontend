
function UserData({username, description, favouriteMovie, averageRating, ratedMovies}) {
    return (
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
        </div>
    )
}

export default UserData;