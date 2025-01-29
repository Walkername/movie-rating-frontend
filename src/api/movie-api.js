
export const addMovie = async () => {
    const response = await fetch(`${process.env.REACT_APP_MOVIE_SERVICE_URL}/movies/add`, {
        method: "POST"
    });
    if (!response.ok) {
        throw new Error('Failed to get movies with pagination');
    }
    return response.json();
}

export const getMoviesWithPagination = async (page, limit, sort) => {
    const response = await fetch(`${process.env.REACT_APP_MOVIE_SERVICE_URL}/movies?page=${page}&limit=${limit}&down=${sort}`);
    if (!response.ok) {
        throw new Error('Failed to get movies with pagination');
    }
    return response.json();
}

export const getMoviesNumber = async () => {
    const response = await fetch(`${process.env.REACT_APP_MOVIE_SERVICE_URL}/movies/count`);
    if (!response.ok) {
        throw new Error('Failed to get number of movies');
    }
    return response.json();
}

export const getMovie = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_MOVIE_SERVICE_URL}/movies/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to get movie with this id:${id}`);
    }
    return response.json();
}

export const deleteMovie = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_MOVIE_SERVICE_URL}/movies/delete/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error(`Failed to delete movie with this id:${id}`);
    }
    return response.json();
}

