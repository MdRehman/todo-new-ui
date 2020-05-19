import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/listoftodos/listoftodos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodosForUser(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  getTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  updateTodo(username,id,todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }
  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  saveTodo(username,todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo);
  }

}
