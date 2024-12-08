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
        return json
    } catch (err) {
        throw err
    }
}


const signin = async (user) => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const json = await res.json()

        if (json.error) { 
            throw new Error(json.error)
        }

        if (json.token) {
            const user = JSON.parse(atob(json.toke.split('.')[1]))
            return user
        }
    } catch (err) {
        throw err
    }
}

export { signup, signin }