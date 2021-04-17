import axios from 'axios';

export default axios.create({
  baseURL: 'http://wp.api.test/wp-json/jwt-auth/v1/'
});
