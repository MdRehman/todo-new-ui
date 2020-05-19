import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/data/todo.service';
import { Todo } from '../listoftodos/listoftodos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private todoService:TodoService,private router:Router) { }
  id:number;
  todo:Todo;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.todo= new Todo(this.id,'',new Date(),false);
    if(this.id!=-1){
      this.todoService.getTodo('rehman',this.id).subscribe(
        data=>{
          this.todo=data;
         
        }
      )
    }
  }

  saveTodo(){
    if(this.id === -1) {
      this.todoService.saveTodo('in28minutes', this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    } else {
      this.todoService.updateTodo('in28minutes', this.id, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    }
  }

}
