import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  // input serve para dados de fora!
  @Input() public title:string = 'Hello World!'

  constructor() { }

  ngOnInit(): void { } // realiza algo no inicio da aplicação

  ngOnChanges(): void {
    console.log('Foi alterado com sucesso.') // realiza algo caso exista uma alteração
  }

  ngOnDestroy(): void {
    console.log('O componente foi destruido!') // quando o componente é destruido
  }

}
