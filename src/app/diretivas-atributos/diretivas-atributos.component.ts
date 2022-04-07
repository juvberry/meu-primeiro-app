import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public value:boolean = true
  public heightPx:string = "20px"
  public backgroundColor:string = "green"

  public nome:string = ''
  public list: Array<{ nome:string }> = [{ nome: 'Jubirama' }]

  public date: Date = new Date()
  constructor() { }

  ngOnInit(): void {

    /* setInterval(()=>{
      if(this.value){
        this.value = false
      } else{
        this.value = true
      }

      if(this.heightPx == "20px"){
        this.heightPx = "50px"
        this.backgroundColor = "green"
      } else{
        this.heightPx = "20px"
        this.backgroundColor = "blue"
      }

    }, 2000) */

  }

  public salvar(){
    this.list.push({ nome: this.nome})
    this.nome = ''
  }

}
