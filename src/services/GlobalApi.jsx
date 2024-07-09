import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '8d03b8cef8c6ab72b4bc92ca6d04518f'
// https://api.themoviedb.org/3/trending/movie/day?language=en-US

// https://api.themoviedb.org/3/trending/all/day?language=en-US
const getTrendingVideos = axios.get(movieBaseUrl + '/trending/all/day?api_key' + api_key );

export default {
    getTrendingVideos,
}