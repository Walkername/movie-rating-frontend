import NavigationBar from "../../components/navigation/navigation";


function UserPage() {
    return (
        <div>
            <NavigationBar />
            <div>
                <h1>User Page</h1>
            </div>

            <div>
                <h3>Username</h3>
            </div>

            <div>
                <h3>Description</h3>
            </div>

            <div>
                <h3>Favourite movie</h3>
            </div>

            <div>
                <h3>Average rating</h3>
            </div>

            <div>
                <h3>Movie Rated List</h3>
            </div>
        </div>
    );
}

export default UserPage;