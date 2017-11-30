import { Component, OnInit} from '@angular/core';
import{ Todo } from '../shared/todo';
import { todoList } from '../shared/data';
import { TodoService } from '../shared/todo.service';

  
@Component({
// moduleId: module.id,
 selector: 'app-todo-list',
 templateUrl: './todo-list.component.html',
 styleUrls: ['./todo-list.component.css']
})


//let filterString = '';

export class TodoListComponent implements OnInit {

	todoList: Todo[];
  constructor(private todoService: TodoService) { 
	  this.todoList = [];
	  
  }
	
	

  ngOnInit() {
	  this.todoList = this.todoService.getTodos();
  }

	delete(todo: Todo){
		this.todoService.deleteTodo(todo);
	}
}


