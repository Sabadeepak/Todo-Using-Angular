import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Task } from '../../models/task';
import { ListTaskComponent } from '../list-task/list-task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-tasks',
  standalone: true,
  imports: [ListTaskComponent, CommonModule],
  templateUrl: './pending-tasks.component.html',
  styleUrl: './pending-tasks.component.css',
})

export class PendingTasksComponent {


  pendingTasks: Task[] = []

  @Input() set tasks(tasks: Task[]) {
    this.pendingTasks = tasks.filter(task => task.completed == 'pending')
  }
  @Output() moveToOnProgressEvent = new EventEmitter();
  @Output() moveToCompletedEvent = new EventEmitter<Task>();
  @Output() deleteTaskEvent = new EventEmitter<string>();


  onCheckboxChange(task: Task) {
    this.moveToCompletedEvent.emit(task);

  }

  moveToOnProgress(task: Task) {
    this.moveToOnProgressEvent.emit(task);

  }
  deleteTask(id: string) {
    this.deleteTaskEvent.emit(id)
  }
}