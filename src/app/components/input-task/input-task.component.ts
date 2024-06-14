import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Task } from '../../models/task'

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.css'
})
export class InputTaskComponent {

  greeting!: string
  constructor() {
    this.setGreeting();
  }
  setGreeting(): void {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      this.greeting = 'Good Morning';
    } else if (currentTime < 18) {
      this.greeting = 'Good Afternoon';
    } else if (currentTime < 20) {
      this.greeting = 'Good Evening';
    } else {
      this.greeting = 'Good Night';
    }
  }

  @Output() addTaskEvent = new EventEmitter<Task>()
  task!: string;

  addTask() {
    if (this.task) {
      let task: Task = {
        id: Date.now().toString(),
        description: this.task,
        completed: "pending"

      }
      this.task = ""
      this.addTaskEvent.emit(task);

    }

  }

}
