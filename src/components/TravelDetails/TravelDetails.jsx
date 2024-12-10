import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as travelService from '../../services/travelService'

const TravelDetails = (props) => {
    const {travelId} = useParams()
    // console.log('travelId', travelId)
    const [travel, setTravel] = useState(null)
    useEffect(() => {
        const fetchTravel = async () => {
            const travelData = await travelService.show(travelId)
            // console.log('travelData', travelData)
            setTravel(travelData)
        }
        fetchTravel()
    }, [travelId])
    if (!travel) return <main>Loading...</main>
    return (
        <main>
            <header>
                <p>{travel.title.toUpperCase()}</p>
                <h1>{travel.title}</h1>
                <p>
                    {travel.author? travel.author.username : "Unknown Author"} posted on {new Date(travel.createdAt).toLocaleDateString()}
                </p>
            </header>
            <p>{travel.text}</p>
            <section>
                <h2>Activities:</h2>
            </section>
        </main>
    )
}

export default TravelDetails