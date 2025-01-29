
export const addRating = async (formData) => {
    const response = await fetch(`${process.env.REACT_APP_RATING_SERVICE_URL}/ratings/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    if (!response.ok) {
        throw new Error('Failed to add new rating the movie');
    }
    return response.json();
}

export const updateRating = async (ratingId, formData) => {
    const response = await fetch(`${process.env.REACT_APP_RATING_SERVICE_URL}/ratings/edit/${ratingId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    });
    if (!response.ok) {
        throw new Error('Failed to update the rating of the movie');
    }
    return response.json();
}