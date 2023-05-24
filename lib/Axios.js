import  Axios from "axios";

const headers = {
    'X-RapidAPI-Key': '1224e123d2mshe2249205a2c72e2p11d421jsn8ea8e464234b',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

export const axios = Axios.create({
    baseURL : "https://bayut.p.rapidapi.com",
    headers: headers
}) 