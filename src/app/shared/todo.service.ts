import { Injectable } from '@angular/core';
import { todoList } from './data';
import { Todo } from './todo'

@Injectable()
export class TodoService {
	todoList: Todo[] = todoList
	
	getTodos (): Todo[] {
		return this.todoList
	}
	
	createTodo(title: string, description: string){
		let id = this.todoList.length+1;
		let created_at = new Date().toDateString()
		let todo = new Todo(id, title, description, created_at)
		
		this.todoList.push(todo)
	}
	
	deleteTodo (todo: Todo) {
		let index = this.todoList.indexOf(todo);	
		if (index > -1){
			this.todoList.splice(index, 1)
		}
	}
	

  constructor() { }

}
