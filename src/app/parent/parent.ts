import { Component } from '@angular/core';
import { FirstChild } from "../first-child/first-child";
import { SecondChild } from "../second-child/second-child";

@Component({
  selector: 'app-parent',
  imports: [FirstChild, SecondChild],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {

  recevedTask:string=''
}
