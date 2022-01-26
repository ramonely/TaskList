import { Component, OnInit } from '@angular/core';
import { Convert, Tasks } from '../tasks';
import { TasksService } from '../tasks.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [TasksService]
})
export class EditComponent implements OnInit {
  
  product;

  constructor(private TaskDAL: TasksService) { }

  ngOnInit() {
    this.product=history.state;
    
  }

  EditTask()
  {
    let Name: string = (<HTMLInputElement>document.getElementById("Name")).value;
      
    let Detail: string = (<HTMLInputElement>document.getElementById("Details")).value;
    
    let DueDate: string = (<HTMLInputElement>document.getElementById("DueDate")).value;

    let Complete: string = (<HTMLInputElement>document.getElementById("Completed")).value;

    let ID: number = parseInt((<HTMLInputElement>document.getElementById("ID")).value);

    let newTask: Tasks = { Id: ID, OwnerName: Name, Details: Detail, DueDate: DueDate, Completed: Complete };

    this.TaskDAL.EditTask(newTask).subscribe(
      (response: Tasks) => { location.replace('list-t') });;
        
  }

}
