import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiurl = 'http://localhost:5150/tasks';

  constructor(private http: HttpClient) {}

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiurl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiurl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
