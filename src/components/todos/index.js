import angular from 'angular';

import Todos from './component';
import TodosService from './service';

export default angular.module('app.components.todos', [])
  .component('todos', Todos)
  .service('TodosService', TodosService)
  .name;
