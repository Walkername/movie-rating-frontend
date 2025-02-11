
export default function RegisterForm() {
    return (
        <form>
            <label>Username:</label>
            <br></br>
            <input type="text" min="5" max="20" required />
            <br></br>

            <label>Password:</label>
            <br></br>
            <input type="password" min="5" required />
            <br></br>

            <label>Password confirmation:</label>
            <br></br>
            <input type="password" required />
            <br></br>

            <input type="submit" value="Register" />
        </form>
    )
}