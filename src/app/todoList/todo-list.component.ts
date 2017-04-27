import { Component, Input } from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[];

  delTask(todo: Todo){
    let index: number = this.todos.indexOf(todo);
    if (index>-1) {
      this.todos.splice(index, 1);
    }
  }
}