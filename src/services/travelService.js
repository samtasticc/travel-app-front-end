const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/travels`

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

const show = async (travelId) => {
    try {
        const res = await fetch(`${BASE_URL}/${travelId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()
    }catch(error){
        console.log(error)
    }
}

const create = async (travelFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(travelFormData),
        })
        return res.json()
    }catch(error){
        console.log(error)
    }
}

const createActivity = async (travelId, activityFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${travelId}/activity`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activityFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTravel = async (travelId) => {
    try {
      const res = await fetch(`${BASE_URL}/${travelId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  

export { index, show, create, createActivity, deleteTravel }