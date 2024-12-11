import { useState, useEffect } from 'react';
import * as travelService from '../../services/travelService'


const ActivityForm = (props) => {
  const [formData, setFormData] = useState({ 
        name: '', 
        duration: '',
        cost: '',
    });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddActivity(formData)
    setFormData({ 
      name: '', 
      duration: '',
      cost: '',
  });
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name: </label>
        <input
            required
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            onChange={handleChange}
        />
        <br/>
        <label htmlFor="duration-input">Duration: </label>
        <input
            required
            type="text"
            name="duration"
            id="duration-input"
            value={formData.duration}
            onChange={handleChange}
        />
        <br/>
        <label htmlFor="cost-input">Cost: </label>
        <input
            required
            type="text"
            name="cost"
            id="cost-input"
            value={formData.cost}
            onChange={handleChange}
        />
        <br/>
      <button type="submit">SUBMIT ACTIVITY</button>
    </form>
  );
};

export default ActivityForm;
