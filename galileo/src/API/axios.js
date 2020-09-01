import axios from 'axios';

 const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://sandbox.galileo-ft.com/instant/v1/',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json', 
        }
    })
}; 

export default axiosWithAuth;