import NavigationBar from '../../components/navigation/navigation';

function MainPage() {
    return (
        <div>
            <NavigationBar />
            <div>
                <h1>Main Page</h1>
            </div>

            <div className="page-content-container">
                <div className="page-content">
                    <div>
                        <h2>Movie List</h2>
                        <div>
                            Interstellar
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainPage;