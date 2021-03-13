import state from '../store';

export interface DataLogin{
  email: string,
  password: string
}

export const authLogin = (userData: DataLogin) => {
  console.log(userData)




  return state.user.token;
}
