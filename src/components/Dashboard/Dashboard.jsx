const Dashboard = ({ user }) => {
    return (
        <main>
            <h1>Welcome, {user.username}, to Jet Set Journal!</h1>
            <p>
               Jet Set Journal is a travel wishlist tracker to help users map out and maintain their future travel plans. Users can create an account, log in, and create their next vacation. Each travel plan allows the user to add a title, date, Country, state/territory, flight options, hotel options, restaurant options, and activity ideas.
            </p>
        </main>
    )
}

export default Dashboard