import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input('childMessage')
  message: string;

  @Output()
  messageEvent = new EventEmitter<string>();

  //message passed via viewChild
  message1: string = 'message from child';

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.message1);
  }
}
