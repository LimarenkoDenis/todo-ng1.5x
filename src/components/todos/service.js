/* global API */

export default class TodosService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  list() {
    return this.$http.get(`${API}`)
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }

  create(newTask) {
    return this.$http.post(`${API}`, newTask)
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }

  remove(_id) {
    return this.$http.delete(`${API}/${_id}`)
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }
}
