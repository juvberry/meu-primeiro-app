import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Module Interface
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter()

  private list:Array<string> = [
    'X Salada',
    'Macarronada',
    'Feijão'
  ]

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  private url:string = "http://localhost:3000/" // food-list

  constructor(private http: HttpClient) { }

  // public foodList(){
  //   return this.list
  // }

  public foodList(): Observable<Array<FoodList>>{
    return this.http.get<Array<FoodList>>(`${this.url}food-list`).pipe(
      res => res,
      error => error
    )
  }

  // public foodListAdd(value:string){
  //   this.foodListAlert(value)
  //   return this.list.push(value)
  // }

  public foodListAdd(value:string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.url}food-list`, {nome:value}).pipe(
      res => res,
      error => error
    )
  }

  public foodListEdit(value:string, id:number): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}food-list/${id}`, {nome:value}).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete(id:number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}food-list/${id}`).pipe(
      res => res,
      error => error
    )
  }

  // public foodListAlert(value:string){
  //   return this.emitEvent.emit(value)
  // }

  public foodListAlert(value:FoodList){
    return this.emitEvent.emit(value)
  }
}
