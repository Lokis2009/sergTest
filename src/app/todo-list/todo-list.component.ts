import { Component, OnInit} from '@angular/core';
import{ Todo } from '../shared/todo';
import { todoList } from '../shared/data';
import { TodoService } from '../shared/todo.service';
import { ChangeDetectorRef} from '@angular/core';
import {FilterPipe, PagerPipe} from '../shared/pipe.pipe'

  
@Component({
 selector: 'app-todo-list',
 templateUrl: './todo-list.component.html',
 styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

	todoList: Todo[];
	page:number;
	filterString:string ='';
	filterDate: string='';
	numberOfPages:number[];
  	itemInPage:number = 3;
	
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
		let arrLength = new FilterPipe()
		let numberOfTodos =arrLength.transform(todoList, 'title', this.filterString)
		numberOfTodos = arrLength.transform(numberOfTodos, 'created_at', this.filterDate)
		for (let i = 0; i<Math.ceil(numberOfTodos.length / this.itemInPage); i++){
			this.numberOfPages.push(i)
		}
		return this.numberOfPages 
		
	}

	delete(todo: Todo){
		this.todoService.deleteTodo(todo);
	}
}


