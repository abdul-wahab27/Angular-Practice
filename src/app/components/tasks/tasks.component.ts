import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:[]=[]
  task!:string
  constructor() { }

  ngOnInit(): void {
  }


  addTasks(task:any){
    this.tasks.push()

  }
}
