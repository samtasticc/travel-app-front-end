const TravelList = (props) => {
    return (
        <main>
            {props.travels.map((travel) => {
                return <p key={travel._id}>{travel.title}</p>
            })}
        </main>
    )
}

export default TravelList