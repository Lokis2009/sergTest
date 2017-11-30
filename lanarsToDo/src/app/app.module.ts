import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoService} from './shared/todo.service';
import {FilterPipe} from './shared/pipe.pipe'


@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
	FilterPipe  
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
