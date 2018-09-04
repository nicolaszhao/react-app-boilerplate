import { axiosRequest as request } from 'tote-box';
import { USER } from './urls';
import mock from './mock';

const req = request({
  timeout: 5000
});

export function getUser() {
  return req.get(USER);
}

if (process.env.NODE_ENV === 'development') {
  mock();  
}
