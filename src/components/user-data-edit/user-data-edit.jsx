import { useNavigate } from "react-router-dom";

function UserDataEdit({ username, description }) {
    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate("/profile");
    }

    return (
        <div>
            <form>
                <label>Username:</label>
                <br></br>
                <input type="text" placeholder="username" value={username} />
                <br></br>

                <label>Description:</label>
                <br></br>
                <input type="text" placeholder="..." value={description} />
                <br></br>

                <input type="submit" value="Update" onClick={handleUpdate} />
            </form>
        </div>
    )
}

export default UserDataEdit;