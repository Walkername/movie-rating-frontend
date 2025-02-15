import NavigationBar from "../../components/navigation/navigation";
import UserDataEdit from "../../components/user-data-edit/user-data-edit";
import UserData from "../../components/user-data/user-data";
import React, { useEffect, useState } from 'react';
import getClaimFromToken from "../../utils/token-validation/token-validation";
import { getUser } from "../../api/user-api";

function UserPage() {
    const [isEditing, setIsEditing] = useState(false);
    const token = localStorage.getItem("token");
    const id = getClaimFromToken(token, "id");

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(id)
            .then((data) => {
                setUser(data); // Set the movie data
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

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
                <h1>Profile</h1>
            </div>
            <div className="page-content-container">
                <div className="page-content">
                    {
                        user == null
                            ? <h1>Error: Data was not found</h1>
                            : <>
                                {
                                    isEditing ? (
                                        <UserDataEdit
                                            username={user.username}
                                            description={user.description}
                                        />
                                    ) : (
                                        <UserData className="user-data-content"
                                            username={user.username}
                                            description={user.description}
                                            favouriteMovie={user.favouriteMovie}
                                            averageRating={user.averageRating}
                                            ratedMovies={ratedMovies}
                                        />
                                    )
                                }
                            </>
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