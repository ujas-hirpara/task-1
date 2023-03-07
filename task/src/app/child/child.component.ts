import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  @Input() objData:{id:number,name:string,city:string,phone:number} = {id:0,name:"",city:"",phone:0}
  ngOnInit(){
    if(this.objData.id === 5){
      this.objData.phone = 9999999999
    }
  }

}
