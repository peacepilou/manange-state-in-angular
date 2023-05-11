import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupcake } from 'src/app/models/cupcake.model';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'feat-smart1',
  templateUrl: './smart1.component.html',
  styleUrls: ['./smart1.component.scss']
})
export class Smart1Component implements OnInit {

  // Technique 1
  cupcakeList: Cupcake[] = [];
  // Technique 2
  cupcakeList$!: Observable<Cupcake[]>;

  constructor(private httpS: HttpService) { }

  ngOnInit(): void {
    // Technique 1
    this.httpS.getCupcakes().subscribe((cupcakes: Cupcake[]) => {
      this.cupcakeList = cupcakes;
    });

    // Technique 2
    this.cupcakeList$ = this.httpS.getCupcakes();
  }



}
