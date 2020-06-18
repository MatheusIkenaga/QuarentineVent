import axios from 'axios'
require ('dotenv').config()

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL_HOMOL
})

export default api;