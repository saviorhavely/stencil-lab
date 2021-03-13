import state from '../store';

export const isLogged = () => {
  return state.authenticated
}
