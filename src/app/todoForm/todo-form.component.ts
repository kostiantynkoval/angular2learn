import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent{
  title: string = '';
  @Output() add = new EventEmitter;

  createTask(){
    this.add.emit(this.title);
  }
}