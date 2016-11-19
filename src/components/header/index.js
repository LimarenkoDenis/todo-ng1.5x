import angular from 'angular';
import Header from './component';

export default angular.module('app.components.header', [])
  .component('header', Header)
  .name;
