const BACKEND_URL = 'http://localhost:3000'

const signup = async (FormData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData) 
        })
        const json = await res.json()
        if (json.err) {
            throw new Error(json.err)
        }
        if(json.token) {
            localStorage.setItem('token', json.token)
            const user = JSON.parse(atob(json.token.split('.')[1]));
            return user;
        }
    } catch (err) {
        throw err
    }
}


const signin = async (user) => {
    try {
      const res = await fetch(`${BACKEND_URL}/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      const json = await res.json()
  
      if (json.token) {
        localStorage.setItem('token', json.token); // add this line to store the JWT token in localStorage
  
        const user = JSON.parse(atob(json.token.split('.')[1]));
  
        return user
      }
      if (json.err) {
        throw new Error(json.err)
      }
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  const getUser = () =>  {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]));
    return user;
  }  

export { signup, signin, getUser }