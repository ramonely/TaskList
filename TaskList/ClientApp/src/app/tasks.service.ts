import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url: string = "Task";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl + this.url;
  }

  GetTaskList(): Observable<any>{
    return this.http.get<Tasks>(this.url);
  }

  CreateTask(t: Tasks) {

    return this.http.post(this.url + "/New/", t);
  
  }

  DeleteTask(id: number) {
    return this.http.delete(this.url + "/Delete/" + id);
  }

  EditTask(t: Tasks)

  {
    return this.http.put(this.url + "/Edit/", t);
  }

  SearchTask(name: string)

  {
    return this.http.get(this.url + "/Search/" + name);
  }

}
