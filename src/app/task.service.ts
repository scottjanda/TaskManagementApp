import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private readonly url = 'https://localhost:7125/api/'
 
  GetTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.url + 'Task');
  }

  UpdateTask(taskToUpdate: Task): Observable<Task> {
    return this.http.patch<Task>(this.url + 'Task/UpdateTask', taskToUpdate);
  }

  //Add more endpoints here

}
