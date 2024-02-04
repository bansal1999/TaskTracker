import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TasksService } from '../../service/tasks.service';

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
}
