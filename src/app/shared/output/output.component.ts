import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  // output envia os dados, enviarDados foi transformado em um evento
  @Output() public enviarDados = new EventEmitter();

  // lista de dados
  public list: Array<{ nome:string, idade:number }> = [
    { nome: 'Julia', idade: 29 },
    { nome: 'Ricka', idade: 31 },
    { nome: 'Mare', idade: 28 }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  // função que pegou os dados e então envia (para algum lugar que vc chamar)
  public getDados(event:number){
    this.enviarDados.emit(this.list[event])
  }

}
