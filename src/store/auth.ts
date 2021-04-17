import state from '../store';
import apiAuth from "../services/apiAuth";

export interface DataLogin{
  username: string,
  password: string
}

export const authLogin = (userData: DataLogin):void => {
  apiAuth.post('/token', userData)
    .then(function (response) {
      setAuthentication(response.data)
      getAuthentication()

      window.location.href = '/'
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

export const checkAuth = async () => {
  const auth = getAuthentication()

  if(auth.token){
    state.auth = auth

    // const config = {
    //   headers: { Authorization: `Bearer ${auth.token}` }
    // };
    //
    // const bodyParameters = {};
    //
    // apiAuth.post(
    //   '/token/validate',
    //   bodyParameters,
    //   config
    // ).then(console.log).catch(console.log);

  }else{
    clearAuthentication()
  }
}

const setAuthentication = (data) => {
  state.auth = data
  window.localStorage.removeItem("authentication")
  window.localStorage.setItem("authentication", JSON.stringify(data))
}

const getAuthentication = () => {
  const auth = JSON.parse( window.localStorage.getItem("authentication") )
  return auth ? auth : false
}

export const clearAuthentication = () => {
  state.auth = { token: false }
  window.localStorage.removeItem("authentication")
}
