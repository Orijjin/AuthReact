import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://localhost:3004/'
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(config => {
   const token = localStorage.getItem('token')
   if(token){
      config.headers['X-Auth-Token'] = token;
   }

   return config;
},
error => Promise.reject(error))

export default instance;