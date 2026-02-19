import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-first-child',
  imports: [FormsModule],
  templateUrl: './first-child.html',
  styleUrl: './first-child.css'
})
export class FirstChild {

  @Output() newOut = new EventEmitter<string>();

  newTask:string='';
  sendOut() {
    this.newOut.emit(this.newTask);
    this.newTask = '';
  }
}
