
export const addUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}/users/add`, {
        method: "POST"
    });
    if (!response.ok) {
        throw new Error('Failed to add new user');
    }
    return response.json();
}

export const getTopUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}/users/top-user`);
    if (!response.ok) {
        throw new Error('Failed to get top user');
    }
    return response.json();
}

export const getUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}/users`);
    if (!response.ok) {
        throw new Error('Failed to get users');
    }
    return response.json();
}

export const getUsersRatedMovie = async (movieId) => {
    const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_URL}/users/movie/${movieId}`);
    if (!response.ok) {
        throw new Error(`Failed to get users that rated this movie: ${movieId}`);
    }
    return response.json();
}