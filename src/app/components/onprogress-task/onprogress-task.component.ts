import { Component } from '@angular/core';
import { ListTaskComponent } from '../list-task/list-task.component';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-onprogress-task',
  standalone: true,
  imports: [ListTaskComponent, CommonModule],
  templateUrl: './onprogress-task.component.html',
  styleUrl: './onprogress-task.component.css'
})
export class OnprogressTaskComponent {
  onProgressTask: Task[] = []

  @Input() set tasks(tasks: Task[]) {
    this.onProgressTask = tasks.filter(task => task.completed == 'OnProgress')
  }

  @Output() moveToCompletedEvent = new EventEmitter<Task>();
  @Output() deleteTaskEvent = new EventEmitter<string>();


  onCheckboxChange(task: Task) {
    this.moveToCompletedEvent.emit(task);

  }
  deleteTask(id: string) {
    this.deleteTaskEvent.emit(id)
  }
}
