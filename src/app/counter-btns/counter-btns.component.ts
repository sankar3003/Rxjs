import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-btns',
  templateUrl: './counter-btns.component.html',
  styleUrls: ['./counter-btns.component.css']
})
export class CounterBtnsComponent implements OnInit {

@Output() incre= new EventEmitter();
@Output() decre= new EventEmitter();
@Output() reset= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onincrement(){
this.incre.emit('1')
  }
  ondecrement(){
    this.decre.emit('-1')
  }
  onreset(){
    this.reset.emit('0')
  }
}
