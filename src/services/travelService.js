const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/travels`

// if the above code isn't working try env.VITE_EXPRESS_BACKEND_URL}/travels

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
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch travel list. Status ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error fetching travel list:', error);
        throw error;
    }
};

export { index, show }