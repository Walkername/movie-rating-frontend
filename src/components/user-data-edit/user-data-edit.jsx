import { useState } from "react";

function UserDataEdit({ username: initialUsername, description: initialDescription }) {
    const [username, setUsername] = useState(initialUsername);
    const [description, setDescription] = useState(initialDescription);

    const handleUpdate = (evt) => {
        evt.preventDefault();
        window.location.reload();
        // TODO: send form to API
    };

    return (
        <div>
            <form>
                <label>Username:</label>
                <br></br>
                <input type="text" placeholder="username" value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br></br>

                <label>Description:</label>
                <br></br>
                <textarea type="text" rows="5" placeholder="..." value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required ></textarea>
                <br></br>

                <input type="submit" value="Update" onClick={handleUpdate} />
            </form>
        </div>
    )
}

export default UserDataEdit;