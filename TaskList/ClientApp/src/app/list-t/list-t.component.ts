import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convert, Tasks } from '../tasks';
import { TasksService } from '../tasks.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-t',
  templateUrl: './list-t.component.html',
  styleUrls: ['./list-t.component.css'],
  providers: [TasksService]
})
export class ListTComponent implements OnInit {

  cTask?: Tasks;

  constructor(private TaskDAL: TasksService) { }

  ngOnInit() {
    this.TaskDAL.GetTaskList().subscribe(
      (response: Tasks) => {
  
        let json = Convert.taskToJson(response);
        this.cTask = Convert.toTask(json);
        
      }
    );

  }

  DeleteTask(id: number)
    {
        this.TaskDAL.DeleteTask(id).subscribe(
          (response: Tasks) => { location.replace('list-t') });
    }

}
