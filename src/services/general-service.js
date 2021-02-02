import { service } from '../utils/endpoints.util';
import { http } from '../utils/http-common';

export default class GeneralService {
  getAll(baseUrl) { return http.get(service(baseUrl)); }

  get(baseUrl, param) { return http.get(service(baseUrl), { params: param }); }

  create(baseUrl, data) { return http.post(service(baseUrl), data); }

  update(baseUrl, param, data) { return http.put(service(baseUrl, param), data); }

  remove(baseUrl, param) { return http.delete(service(baseUrl, param)); }

  removeAll(baseUrl) { return http.delete(service(baseUrl)); }
}
