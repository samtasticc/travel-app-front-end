import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as travelService from '../../services/travelService'

const TravelDetails = (props) => {
    const {travelId} = useParams()
    // console.log('travelId', travelId)
    const [travels, setTravels] = useState(null)
    useEffect(() => {
        const fetchTravel = async () => {
            const travelData = await travelService.show(travelId)
            console.log('travelData', travelData)
            setTravels(travelData)
        }
        fetchTravel()
    }, [travelId])
    return <main>Travel Details</main>
}

export default TravelDetails