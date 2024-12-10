import { useState } from "react";

const TravelForm = (props) => {
    const [formData, setFormData] = useState({
        title:'',
        date: '',
        country: '',
        flights: '',
        hotels: '',
        restaurants: ''
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log('formData', formData);
        props.handleAddTravel(formData)
      };

    
      return (
        <main>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title: </label>
            <input
              required
              type="text"
              name="title"
              id="title-input"
              value={formData.title}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="date-input">Date: </label>
            <input
              required
              type="text"
              name="date"
              id="date-input"
              value={formData.date}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="country-input">Country: </label>
            <input
              required
              type="text"
              name="country"
              id="country-input"
              value={formData.country}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="flights-input">Flights: </label>
            <input
              required
              type="text"
              name="flights"
              id="flights-input"
              value={formData.flights}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="hotels-input">Hotels: </label>
            <input
              required
              type="text"
              name="hotels"
              id="hotels-input"
              value={formData.hotels}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="restaurants-input">Restaurants: </label>
            <input
              required
              type="text"
              name="restaurants"
              id="restaurants-input"
              value={formData.restaurants}
              onChange={handleChange}
            />
            <br/>
            <button type="submit">SUBMIT</button>
          </form>
        </main>
      );
    };
    
    export default TravelForm;