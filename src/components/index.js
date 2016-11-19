import angular from 'angular';

import Header from './header';
import Todos from './todos';

export default angular.module('app.components', [Header, Todos])
  .name;
