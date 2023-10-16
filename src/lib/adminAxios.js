
import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies()




const axiosPrivate = axios.create({
    baseURL: "https://backendrahad.pythonanywhere.com",
    headers :{
        "Content-Type" : "application/json"
    }
})

axiosPrivate.interceptors.request.use(res => {
    
    res.headers['Authorization'] = cookies.get("Token")
    
    return res
})



export default axiosPrivate
