import axios from 'axios';

const request = async (method, url) => {
    const res = await axios({
        method: method,
        url: process.env.API_URL + url
    });

    const data = await res.data;

    return data;
}

export default request;