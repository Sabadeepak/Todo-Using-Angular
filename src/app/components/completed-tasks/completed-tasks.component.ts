import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListTaskComponent } from '../list-task/list-task.component';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [ListTaskComponent, CommonModule],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.css'

})
export class CompletedTasksComponent {

  completedTasks: Task[] = []
  tasksList: number = 0

  @Output() deleteTaskEvent = new EventEmitter()


  @Input() set tasks(tasks: Task[]) {
    this.tasksList = tasks.length
    this.completedTasks = tasks.filter((task) => task.completed === 'Completed')
  }



  deleteTask(id: string) {
    this.deleteTaskEvent.emit(id)
  }

}