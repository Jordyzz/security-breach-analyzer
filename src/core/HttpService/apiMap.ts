import { ApiMap } from './http.interface';

export const apiMap: ApiMap = {
  getBreaches: {
    url: 'https://guard.io/v2/hiring/fe/breaches?offset=<%= offset %>',
    method: 'get'
  }
};
