import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
student={
  name: "Jinha",
  age: 25,
  address: "Karachi"}
  
  message: string= "Hello world!";
  Changemessage(){
    this.message = "Goodbye world!";
  }
  num1: number=100;
  num2: number=200;

  onchange(value: string) {
    this.message = value;
  }
updateMessage() {
    this.message = 'Updated message !';
  }

}

