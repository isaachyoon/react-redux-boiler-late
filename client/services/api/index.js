import axios from 'axios';

export const login = (api) => {
  return axios.get('http://127.0.0.1:3000/login')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(error){
    console.log('request failederrr');
  })
}