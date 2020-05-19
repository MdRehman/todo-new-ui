import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listoftodos',
  templateUrl: './listoftodos.component.html',
  styleUrls: ['./listoftodos.component.css']
})



export class ListoftodosComponent implements OnInit {

  deleteMessage;
  todos:Todo[]; 
  todo:Todo;
  constructor(private todoService: TodoService,private route:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }


  refreshTodos(){
    this.todoService.getTodosForUser('rehman').subscribe(
      response => this.todos = response

    )
  }

  updateTodo(id){
   
        this.route.navigate(['todo',id])
      
  }

  deleteTodo(id){
    this.todoService.deleteTodo('rehman',id).subscribe(
      response => {
        this.deleteMessage = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
    
  }

  addTodo(){
    this.route.navigate(['todo',-1])
  }
}
export class Todo {
  constructor(
    public id: number,

    public description: String,

    public targetDate: Date,

    public done: boolean,

  ) {

  }
}
