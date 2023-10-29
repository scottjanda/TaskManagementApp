import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskChartComponent } from './task-chart/task-chart.component';

const routes: Routes = [
  { path: '', component: TaskChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
