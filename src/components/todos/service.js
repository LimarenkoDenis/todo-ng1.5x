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
}
