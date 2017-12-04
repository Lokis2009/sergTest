import { Component, OnInit } from '@angular/core';
import {TodoService } from '../shared/todo.service'

@Component({
//	moduleId: module.id,
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
	title: string ='';
	description: string ='';

  constructor(private todoService: TodoService) { 
	  
  }
	onCreate(){
		this.todoService.createTodo(this.title, this.description)
		this.title ='';
		this.description='';

	}

  ngOnInit() {
  }

}
