import { useState, useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import * as travelService from '../../services/travelService'
import ActivityForm from "../ActivityForm/ActivityForm"
import { AuthedUserContext } from "../../App"

const TravelDetails = (props) => {
    const {travelId} = useParams()
    // console.log('travelId', travelId)
    const [travel, setTravel] = useState(null)
    const user = useContext(AuthedUserContext)
    useEffect(() => {
        const fetchTravel = async () => {
            const travelData = await travelService.show(travelId)
            // console.log('travelData', travelData)
            setTravel(travelData)
        }
        fetchTravel()
    }, [travelId])

const handleAddActivity = async (activityFormData) => {
    // console.log('activityFormData', activityFormData)
    const newActivity = await travelService.createActivity(travelId, activityFormData)
    setTravel({...travel, activity: [...travel.activity, newActivity]})
}

    if (!travel) return <main>Loading...</main>
    return (
        <main>
            <header>
                <p>{travel.title.toUpperCase()}</p>
                <h1>{travel.title}</h1>
                <p>
                    {travel.author ? travel.author.username : "Unknown Author"} posted on {new Date(travel.createdAt).toLocaleDateString()}
                </p>
                {travel.author._id === user._id && (
                    <>
                        <Link to={`/travels/${travelsId}/edit`}>Edit</Link>
                        <button onClick={() => {props.handleDeleteTravel(travelId)}}>Delete</button>
                    </>
                )}
            </header>
            <p>{travel.text}</p>
            <section>
                <h2>Activities:</h2>
                <ActivityForm handleAddActivity={handleAddActivity}/>
                {!travel.activity.length && <p>There are no activities.</p>}
                {travel.activity.map((activity) => (
                    <article key={activity._id}>
                        <header>
                            <p>
                                {activity.author.username} posted on {new Date(activity.createdAt).toLocaleDateString}
                            </p>
                        </header>
                        <p>{activity.text}</p>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default TravelDetails