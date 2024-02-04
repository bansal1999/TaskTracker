import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TasksService } from '../../service/tasks.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(Task: Task) {
    this.tasksService
      .deleteTask(Task)
      .subscribe(
        (tasks) => (this.tasks = this.tasks.filter((t) => t.id !== tasks.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.tasksService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.tasksService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
