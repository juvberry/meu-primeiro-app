import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome:string = 'Julia'
  public idade:number = 29
  public um:number = 1

  public checkDisabled:boolean = false;
  public imgSrc:string = "https://i.pinimg.com/474x/a1/03/30/a1033030a8b441aaf48a83ead285cbe1.jpg"
  public imgTitle:string = "Gatinho"

  public position: {x:number, y:number} = {x:0, y:0}
  constructor(){
  }

  ngOnInit(): void {
  }
  public alertInfo(value: MouseEvent){
    console.log(value)
  }

  public mouseMoveTest(value: MouseEvent){
    this.position.x = value.offsetX
    this.position.y = value.offsetY
  }

  public closeTest(value: Event){
    console.log(value)
  }
}
