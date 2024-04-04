import axios from "axios";
import {useQuery} from "react-query";

const useFetchingData = () => {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c')
} 



export const useFetchingWeather = () => {
    return useQuery(`data-weather`, useFetchingData)
} 