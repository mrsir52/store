const getJWT = () => {
    return localStorage.getItem('token')
}

export default getJWT