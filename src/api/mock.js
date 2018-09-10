import Mock from 'mockjs';
import { USER } from './urls';

export default function mock() {
  Mock.setup({
    timeout: '400-800'
  });

  Mock.mock(USER, {
    'status|-1-0': -1,
    data: {
      name: '@name',
      email: '@email',
      'age|10-60': 20
    },
    message: '@sentence'
  });
}
