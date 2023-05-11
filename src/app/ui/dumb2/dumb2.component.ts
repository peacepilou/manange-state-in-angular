import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-dumb2',
  templateUrl: './dumb2.component.html',
  styleUrls: ['./dumb2.component.scss']
})
export class Dumb2Component implements OnInit {

  @Output()
  emitAddCupcake: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  addCupcake(): void {
    this.emitAddCupcake.emit(true);
  }

}
