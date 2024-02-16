// BASE: https://api.themoviedb.org/3
// https://api.themoviedb.org/3/movie/550?api_key=f87f79a893719ec360668cb0c48cc462


import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api