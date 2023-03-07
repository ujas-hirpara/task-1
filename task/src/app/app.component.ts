import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  data = [
    {id:1,name:"ujas",city:"amreli",phone:9099870805},
    {id:2,name:"abhay",city:"surat",phone:8943764345},
    {id:3,name:"vaibhav",city:"babra",phone:8904234243},
    {id:4,name:"ronak",city:"ahmedabad",phone:9085645505},
    {id:5,name:"jayesh",city:"lathi",phone:8976896423}
  ]
}
