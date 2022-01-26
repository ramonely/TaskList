import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css'],
  providers: [TasksService]
})
export class AddtaskComponent implements OnInit {

  constructor(private TaskDAL: TasksService) { }

  ngOnInit() {
  }

    CreateTask() {
      let Name: string = (<HTMLInputElement>document.getElementById("Name")).value;
      
      let Detail: string = (<HTMLInputElement>document.getElementById("Details")).value;
      
      let DueDate: string = (<HTMLInputElement>document.getElementById("DueDate")).value;

      let newTask: Tasks = { Id: 0, OwnerName: Name, Details: Detail, DueDate: DueDate, Completed: "No" };
      
      this.TaskDAL.CreateTask(newTask).subscribe(
        (response: Tasks) => { location.replace('list-t') });
      }
    }



