import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';

import { AppComponent }        from './app.component';
import { TodoFormComponent }   from './todoForm/todo-form.component';
import { TodoListComponent }   from './todoList/todo-list.component';
import { TodoItemComponent }   from './todoItem/todo-item.component';
import { TodoService }         from './shared/todo.service';


@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule 
  ],
  declarations: [ 
                  AppComponent, 
                  TodoFormComponent,
                  TodoListComponent,
                  TodoItemComponent
  ],
  providers:    [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
