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