import { Component, OnInit} from '@angular/core';
import{ Todo } from '../shared/todo';
import { todoList } from '../shared/data';
import { TodoService } from '../shared/todo.service';
import { ChangeDetectorRef} from '@angular/core';

  
@Component({
 selector: 'app-todo-list',
 templateUrl: './todo-list.component.html',
 styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

	todoList: Todo[];
	page:number;
	numberOfPages:number[];
  	itemInPage:number = 8;
	
	constructor(private todoService: TodoService, private ref: ChangeDetectorRef ) { 
	  this.todoList = [];
  }
	
  ngOnInit() {
	  this.todoList = this.todoService.getTodos();
	  this.getPages()
	  this.page=1
	  this.ref.detectChanges()
  }
	
	getPages() {
		this.numberOfPages = []; 	
		for (let i = 0; i<Math.ceil(this.todoList.length / this.itemInPage); i++){
			this.numberOfPages.push(i)
		}
		return this.numberOfPages 
		
	}

	delete(todo: Todo){
		this.todoService.deleteTodo(todo);
	}
}


