import { Component, OnInit } from '@angular/core';

/*
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
*/

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

    <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributo</h1>
      <h3>Final da aula</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Alguma coisa primeiro</h1>
      <h3>Final de alguma coisa</h3>
    </app-diretivas-atributos>
    <app-diretivas-atributos></app-diretivas-atributos>
    <app-new-component></app-new-component>
    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()"> Add </button>

    <ng-template [ngIf]="getDados">
      <p>{{getDados.nome}}</p>
      <p>{{getDados.idade}}</p>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>

    <app-food-list></app-food-list>
    <app-food-add></app-food-add> -->

    <app-forms></app-forms>
    <router-outlet></router-outlet>
    `

})
export class AppComponent implements OnInit{

  public addValue:number = 0;

  // você precisa buscar os dados que enviou:
  public getDados: { nome:string, idade:number } | undefined

  constructor(){
  }

  ngOnInit(): void{
  }
  
  public add(){
    this.addValue += 1;
  }

  // setDados recebe o @output que vc criou através do $event. O event = getDados
  public setDados(event: { nome:string, idade:number}){
    this.getDados = event
  }

  /*
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  */
}
