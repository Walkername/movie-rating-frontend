import { useState } from "react";
import { updateUser } from "../../api/user-api";
import getClaimFromToken from "../../utils/token-validation/token-validation";

function UserDataEdit({ username: initialUsername, description: initialDescription, editing: setIsEditing }) {
    const token = localStorage.getItem("token");
    const id = getClaimFromToken(token, "id");

    const [formData, setFormData] = useState({
        username: initialUsername,
        description: initialDescription
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = (evt) => {
        evt.preventDefault();

        updateUser(id, formData)
            .then((data) => {
                console.log("Updated successfully:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        window.location.reload();
    };

    return (
        <div>
            <form method="PATCH" onSubmit={handleUpdate}>
                <label>Username:</label>
                <br></br>
                <input name="username" type="text" placeholder="username" value={formData.username}
                    onChange={handleChange}
                    required
                />
                <br></br>

                <label>Description:</label>
                <br></br>
                <textarea name="description" type="text" rows="5" placeholder="..." value={formData.description}
                    onChange={handleChange}
                    required ></textarea>
                <br></br>

                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default UserDataEdit;