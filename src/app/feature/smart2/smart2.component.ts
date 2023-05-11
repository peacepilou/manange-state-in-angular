import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'feat-smart2',
  templateUrl: './smart2.component.html',
  styleUrls: ['./smart2.component.scss']
})
export class Smart2Component implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }
  
  onReceiveAddCupcake(b: boolean): void {
    this.http.addCupcake();
  }

}
