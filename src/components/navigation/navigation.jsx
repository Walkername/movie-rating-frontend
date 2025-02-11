import { useNavigate } from "react-router-dom";

function NavigationBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleClick = (target) => {
        navigate(target);
    }

    const handleLogout = (e) => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const links = [
        { text: "Main Page", path: "/" },
        { text: "Profile (in dev.)", path: "/profile" },
        { text: "Add Movie (Admin)", path: "/movies/add" },
        { text: "Add User (Admin)", path: "/users/add" }
    ];

    return (
        <nav>
            {links.map((link, index) => (
                <span
                    className="nav-element"
                    key={index}
                    onClick={
                        () => handleClick(link.path)}
                >
                    {link.text}
                </span>
            ))}
            {
                token ?
                    <button onClick={handleLogout}>Log out</button>
                    :
                    <>
                        <span className="nav-element" onClick={() => navigate("/register")}>Register</span>
                        <span className="nav-element" onClick={() => navigate("/login")}>Login</span>
                    </>

            }

        </nav>
    )
}

export default NavigationBar;