import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  
  tasks:any[]=[];
  newTask='';

  addTask(){
    if(this.newTask.trim()){
      this.tasks.push(this.newTask.trim());
      this.newTask='';
    }
  }
  deleteTask(index: number){
    this.tasks.splice(index,1);
  }

}
