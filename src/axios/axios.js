import axios from "axios"  // 16.3

const instance = axios.create({
     // 16.3
    baseURL: 'http://localhost:5001/clone-app-55d61/us-central1/api' /* 16.6 */
    
}) // 16.3


export default instance // 16.3