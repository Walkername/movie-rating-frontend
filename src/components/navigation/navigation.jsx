import { useNavigate } from "react-router-dom";

function NavigationBar() {
    const navigate = useNavigate();

    const handleClick = (target) => {
        navigate(target);
    }

    const links = [
        { text: "Main Page", path: "/" },
        { text: "Profile", path: "/profile" },
        { text: "Add Movie (Admin)", path: "/movie/add" },
    ];

    return (
        <div>
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
        </div >
    )
}

export default NavigationBar;