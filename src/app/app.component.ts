import { Component } from '@angular/core';

class Todo{
  constructor(  public title: string, 
                public completed: boolean = false) {}
}
const todos: Todo[] = [
  { 
    title: 'Learn Angular 2',
    completed: false
  },
  { 
    title: 'Learn JavaScript',
    completed: true
  },
  { 
    title: 'Make Application',
    completed: true
  }
];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  { 
  title: string = 'Angular 2Do';
  todos: Todo[] = todos;

  createTask(){
    let todo: Todo = new Todo(this.newTodoTitle);
    this.todos.push(todo);
    this.newTodoTitle = '';
  }

  taskToggle(todo: Todo){
    todo.completed = !todo.completed;
  }
  deleteTask(todo: Todo){
    let index: number = this.todos.indexOf(todo);
    if (index>-1) {
      this.todos.splice(index, 1);
    }
  }
}
