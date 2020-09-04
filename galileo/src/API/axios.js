import axios from 'axios';

 const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://sandbox.galileo-ft.com/instant/v1',
        headers:{
            // 'Cookie':'f5avraaaaaaaaaaaaaaaa_session_=CMGPGGGHFBDHHKCCHMOIDGBHOEAKEGBKFEDIFHLDOEFFPINMKHDCAEHOHJHLJMELLJODBFOHLHBBJIPOPLIAIOLGHBEDNDFIEDJJKENJICOHLLMNJEPJIHHAAPLKLAHG; TS012d9947=012fd6b128e3f8ef7758972c1cb20ccb8cf95899b5a9c083662d0a743b4819afa96399b8b7f53fa99aa221127090362a36e4dc2ec2',
            'Cache-Control':'no-cache',
            'Content-type': 'application/json', 
        }
    })
}; 

export default axiosWithAuth;