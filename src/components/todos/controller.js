export default class TodosController {
  constructor(TodosService) {
    'ngInject';
    this.TodosService = TodosService;
    this.items = [];
  }

  $onInit() {
    this.TodosService.list().then(resolve => {
      this.items = resolve;
    });
  }

  create(newTask) {
    this.TodosService.create(newTask).then(resolve => {
      this.items = resolve;
      this.$onInit();
    });
  }

  remove(_id) {
    this.TodosService.remove(_id).then(() => {
      this.$onInit();
    });
  }
}
