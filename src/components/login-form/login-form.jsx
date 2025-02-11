import { useState } from "react";
import { login } from "../../api/auth-api";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        login(formData)
            .then((data) => {
                console.log("Login successfully:", data);
                localStorage.setItem("token", data.token);
                navigate("/profile");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error adding movie");
            });

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <br></br>
            <input name="username" type="text" min="5" max="20" value={formData.title} onChange={handleChange} required />
            <br></br>

            <label>Password:</label>
            <br></br>
            <input name="password" type="password" min="5" value={formData.title} onChange={handleChange} required />
            <br></br>

            <input type="submit" value="Login" />
        </form>
    )
}