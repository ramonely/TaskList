import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convert, Tasks } from '../tasks';
import { TasksService } from '../tasks.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [TasksService]
})
export class SearchComponent implements OnInit {

  cTask?: Tasks;

  constructor(private TaskDAL: TasksService) { }

  ngOnInit() {

  }

    SearchTask()
    {

      let Name: string = (<HTMLInputElement>document.getElementById("Name")).value;

        this.TaskDAL.SearchTask(Name).subscribe(
          (response: Tasks) => {               
            let json = Convert.taskToJson(response);
            this.cTask = Convert.toTask(json); });

          }

}
