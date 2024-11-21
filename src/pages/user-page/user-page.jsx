import NavigationBar from "../../components/navigation/navigation";
import UserDataEdit from "../../components/user-data-edit/user-data-edit";
import UserData from "../../components/user-data/user-data";
import React, { useState } from 'react';

function UserPage() {
    const [isEditing, setIsEditing] = useState(false);

    let username = "Some user";
    let description = "I like movies very much!"
    let favouriteMovie = "Interstellar";
    let averageRating = 7.8;
    const ratedMovies = [
        { title: "Interstellar", rating: 9.8 },
        { title: "Inception", rating: 8.1 }
    ];

    const handleEditButton = () => {
        setIsEditing(!isEditing); // Toggle state between true and false
    };

    return (
        <>
            <NavigationBar />
            <div>
                <h1>User Page (In Development)</h1>
            </div>
            <div className="page-content-container">
                <div className="page-content">
                    {
                        isEditing ? (
                            <UserDataEdit
                                username={username}
                                description={description} />
                        ) : (
                            <UserData className="user-data-content"
                                username={username}
                                description={description}
                                favouriteMovie={favouriteMovie}
                                averageRating={averageRating}
                                ratedMovies={ratedMovies}
                            />
                        )
                    }
                    <div className="user-edit-div">
                        <button
                            className="user-edit-button"
                            onClick={handleEditButton}>
                            {isEditing ? 'Back' : 'Edit'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserPage;