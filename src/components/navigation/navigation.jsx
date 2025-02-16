import { useNavigate } from "react-router-dom";
import getClaimFromToken from "../../utils/token-validation/token-validation";

function NavigationBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const exp = getClaimFromToken(token, "exp");
    const authStatus = Date.now() / 1000 <= exp;

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
                authStatus ?
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