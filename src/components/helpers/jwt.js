const getJWT = () => {
    return localStorage.getItem('user')
}

export default getJWT