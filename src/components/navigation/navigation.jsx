import { useNavigate } from "react-router-dom";
import getClaimFromToken from "../../utils/token-validation/token-validation";
import SearchField from "../search-field/search-field";

function NavigationBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const exp = getClaimFromToken(token, "exp");
    const id = getClaimFromToken(token, "id");
    const authStatus = Date.now() / 1000 <= exp;

    const handleClick = (target) => {
        navigate(target);
    }

    const handleLogout = (e) => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const links = [
        { text: "MOVIE CLUSTER", path: "/" }
    ];

    return (
        <nav>
            <span className="nav-center">
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
                <SearchField />
                {
                    authStatus ?
                        <span
                            className="nav-element"
                            onClick={() => navigate(`/user/${id}`)}
                        >Profile</span>
                        : <></>
                }

            </span>

            <span className="auth-buttons">
                {
                    authStatus ?
                        <span className="auth-button" onClick={handleLogout}>Log out</span>
                        :
                        <>
                            <span className=" auth-button" onClick={() => navigate("/register")}>Register</span>
                            <span className="auth-button" onClick={() => navigate("/login")}>Login</span>
                        </>

                }
            </span>


        </nav>
    )
}

export default NavigationBar;