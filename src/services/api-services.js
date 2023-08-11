import axios from "axios";
const apiURL = 'http://localhost:5000'

export const checkLogin = (payload) =>{

    const loginUrl = apiURL + `/login?user_id=${payload.user_id}&password=${payload.password}`
    axios.get(loginUrl).then((res,req) =>{
        console.log('res : ', res);
    })

}