import { Component, Input, OnInit } from '@angular/core';
import { Cupcake } from 'src/app/models/cupcake.model';

@Component({
  selector: 'ui-dumb1',
  templateUrl: './dumb1.component.html',
  styleUrls: ['./dumb1.component.scss']
})
export class Dumb1Component implements OnInit {

  @Input()
  cupcake!: Cupcake;

  constructor() { }

  ngOnInit(): void {
   
  }


}
