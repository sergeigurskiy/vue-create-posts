import axios from "axios";

export default function http (url) {
    return axios.create({
        baseURL:url,
    })
}