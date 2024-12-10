import { Link } from "react-router-dom"

const TravelList = (props) => {
    return (
        <main>
            {props.travels.map((travel) => {
                return (
                    <Link key={travel._id} to={`/travels/${travel._id}`}>
                        <article>
                            <header>
                                <h2>{travel.title}</h2>
                                <p>
                                    {travel.author?.username} posted on {new Date(travel.createdAt).toLocaleDateString()}
                                </p>
                            </header>
                            <p>{travel.text}</p>
                        </article>
                    </Link>
                )
            })}
        </main>
    )
};
export default TravelList