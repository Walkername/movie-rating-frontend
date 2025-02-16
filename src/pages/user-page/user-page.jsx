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
                                            user={user}
                                        />
                                    ) : (
                                        <UserData className="user-data-content"
                                            user={user}
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