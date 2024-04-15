// BASE: https://api.themoviedb.org/3 - URL é aquela q nunca vai mudar
// https://api.themoviedb.org/3/movie/550?api_key=f87f79a893719ec360668cb0c48cc462
// npm install axios

import axios from "axios"; // axios é uma biblioteca que assim como o facht ele faz uma requisção HTTP

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api