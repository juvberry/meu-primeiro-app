import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  // ngIf
  public condition:boolean = true
  public conditionClick:boolean = true

  // ngFor
  public list:Array <{ nome:string, idade:number}> = [
    { nome: 'Julia Beims', idade: 29 },
    { nome: 'Ricardo Salim', idade: 31},
    { nome: 'Maressa Busch', idade: 28 },
  ]

  // ngSwitch
  public nome:string = 'Julia'
  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.condition){
        this.condition = false
      } else {
        this.condition = true
      }
    }, 2000)
  }

  // ngIf
  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  // ngFor
  public onClickAddList(){
    this.list.push({nome: 'Laura', idade: 19})
  }

  public onClickEventList(event:MouseEvent){
    console.log(event)
  }
}
