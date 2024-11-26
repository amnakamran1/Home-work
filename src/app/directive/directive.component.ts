import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
interface student{
  id: number;
  name: string;
  age: number;
  city: string;
}
@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  cityName:string[]=['karachi','lahore','multan'];

div1show : boolean =false;
div2toggle : boolean =false;
num1: string ='';
num2: string ='';
showdiv1(){
  this.div1show = true;
}
hidediv1(){
  this.div1show = false;
}
togglediv2() {
this.div2toggle= !this.div2toggle;
}
studentList:student[]=[
  {id: 1, name:'Amna',age:40,city:'karachi'},
  {id: 2, name:'Affan',age:20,city:'Lahore'},
  {id: 3, name:'Ali',age:24,city:'karachi'},
  {id: 4, name:'Afnan',age:26,city:'multan'},
  {id: 5, name:'Aliyan',age:30,city:'karachi'},
]

DayName:string="Monday";
}
