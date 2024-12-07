const Dashboard = ({ user }) => {
    return (
        <main>
            <h1>Welcome, {user.username}</h1>
            <p>
               Signed in Dashboard
            </p>
        </main>
    )
}

export default Dashboard