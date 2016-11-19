export default class TodosController {
  constructor(TodosService) {
    'ngInject';
    this.TodosService = TodosService;
  }

  $onInit() {
    this.TodosService.list().then(resolve => {
      this.items = resolve;
    });
  }
}
