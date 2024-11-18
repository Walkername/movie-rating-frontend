import NavigationBar from '../../components/navigation/navigation';

function MainPage({ movies }) {
    return (
        <body>
            <NavigationBar />
            <div>
                <h1>Main Page</h1>
            </div>

            <div className="page-content-container">
                <div className="page-content">
                    <div>
                        <h2>Movie List</h2>
                        <div>
                            {
                                movies.map((movie) => {
                                    let href = "/movies/" + movie.id;
                                    return (
                                        <div>
                                            <a href={href}>{movie.title} ({movie.releaseYear}): {movie.averageRating}</a>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </body>

    )
}

export default MainPage;