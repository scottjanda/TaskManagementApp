import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-chart',
  templateUrl: './task-chart.component.html',
  styleUrls: ['./task-chart.component.css']
})
export class TaskChartComponent {

  taskList: Task[] = [];
  showNonSensitiveTasks: boolean = true;

    constructor(private taskService: TaskService){
      this.showNonSensitiveTasks = true;
    }

    async ngOnInit(): Promise<void> {
  
      this.taskService.GetTasks()
      .subscribe(result => {
        this.taskList = result;
        console.log(this.taskList);
      });
  
    }

    toggleTasksView(): void {
      this.showNonSensitiveTasks = !this.showNonSensitiveTasks;
    }

    updateLastCompleted(taskId: number): void {

      const taskToUpdate: Task | undefined = this.taskList.find(task => task.taskId === taskId);

      if (taskToUpdate) {
        this.taskService.UpdateTask(taskToUpdate).subscribe(() => {
          window.location.reload();
        });
      }

    }

    

}
