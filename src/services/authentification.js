import http from '../helpers/http'

const login = userCredentials => {
   return http.post('/login', userCredentials)
      .then(response => response.data)
      .catch(error => console.log('Erreur Login: ',error))
};

const logout = () => {
   return http.post('/logout')
      .then(response => response.data)
      .catch(error => console.log('Erreur Logout: ',error))
}

export const authentificationService = {
   login,
   logout
}