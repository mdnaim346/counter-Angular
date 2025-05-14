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
  
  tasks:{title:string, completed:boolean}[]=[];
  newTask='';

  addTask(){
    const title=this.newTask.trim();
    if(title){
      this.tasks.push({title,completed:false});
      this.newTask='';
    }
  }
  deleteTask(index: number){
    this.tasks.splice(index,1);
  }
  toggleTask(index: number) {
  this.tasks[index].completed = !this.tasks[index].completed;
}

}
