import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css',
})
export class ListTaskComponent {

  @Input() tasks: Task[] = [];


  @Output() moveToOnProgressEvent = new EventEmitter<Task>();
  @Output() moveToCompletedEvent = new EventEmitter<Task>();
  @Output() deleteTaskEvent = new EventEmitter<string>();


  onCheckboxChange(event: any, task: Task) {
    console.log(task)
    if (event.target.checked) {

      task.completed = 'Completed';
      this.moveToCompletedEvent.emit(task);

    } else {

      task.completed = 'pending';
    }
  }

  moveToOnProgress(task: Task) {
    this.moveToOnProgressEvent.emit(task);
    console.log(task)

  }

  deleteTask(id: string) {
    this.deleteTaskEvent.emit(id);
  }
}

