import { axiosRequest as request } from 'tote-box';
import { USER } from './urls';

// TODO: 适合超前的开发环境
import mock from './mock';

const req = request({
  timeout: 5000
}, {
  filterResponse(data) {
    if (data.status === 0) {
      return Promise.resolve(data.data);
    }

    return Promise.reject(new Error(data.message));
  },
  beautifyError(url, err) {
    return new Error(`Request ${url} error, message: ${err.message}`);
  }
});

export function fetchUser() {
  return req.get(USER);
}

export function noop() {}

if (process.env.NODE_ENV !== 'production') {

  // TODO: 适合超前的开发环境
  mock();  
}
