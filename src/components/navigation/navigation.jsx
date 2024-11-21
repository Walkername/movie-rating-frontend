import { useNavigate } from "react-router-dom";

function NavigationBar() {
    const navigate = useNavigate();

    const handleClick = (target) => {
        navigate(target);
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
        </nav>
    )
}

export default NavigationBar;