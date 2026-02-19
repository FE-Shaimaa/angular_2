import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './second-child.html',
  styleUrls: ['./second-child.css']
})
export class SecondChild implements OnChanges {

  @Input() taskName: string = '';
  tasks: { name: string; isDone: boolean }[] = [];
  storedArr = 'tasks';

  constructor() {
    const stored = localStorage.getItem(this.storedArr);
    if (stored) {
      this.tasks = JSON.parse(stored);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskName'] && this.taskName.trim() !== '') {
      this.tasks.push({ name: this.taskName, isDone: false });
      this.save();
    }
  }

  toggleDone(index: number) {
    this.tasks[index].isDone = !this.tasks[index].isDone;
    this.save();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.save();
  }

  save() {
    localStorage.setItem(this.storedArr, JSON.stringify(this.tasks));
  }
}
