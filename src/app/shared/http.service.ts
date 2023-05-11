import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _cupcakesSubject$: BehaviorSubject<Cupcake[]> = new BehaviorSubject<Cupcake[]>([]);

  private readonly BASE_URL: string = "http://localhost:3000/cupcakes";

  constructor(private http: HttpClient) { }

  getCupcakes(): Observable<Cupcake[]> {
    if(this._cupcakesSubject$.value.length) { // > 0
      console.log("OMG déjà une valeur");
      return this._cupcakesSubject$.asObservable();
    } else {
       return this.http.get<any>(this.BASE_URL)
       .pipe(
        tap((cupcakes: Cupcake[]) => {
          this._cupcakesSubject$.next(cupcakes);
          console.log("fetch de la data");      
        }),
        switchMap(() => this._cupcakesSubject$.asObservable())
      );
    }
  }

  addCupcake(): void {
    const header = { 'content-type' : 'application/json'};
    const body = JSON.stringify(new Cupcake("my new cupcake", 3.00));
    this.http.post<Cupcake>(this.BASE_URL, body, {
      headers: header
    })
    .subscribe((res) => {
      this._cupcakesSubject$.next([...this._cupcakesSubject$.value, res])
    })
  }


}
