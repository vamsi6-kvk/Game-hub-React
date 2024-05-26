import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '73f9a6caaacb4e3ba1c4bcf2e0adbff3'
    }
})