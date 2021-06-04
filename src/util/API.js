import axios from "axios";

const api = {
    retrieveUsers() {
        return axios.get('https://randomuser.me/api/?results=50')
    }
}

export default api;