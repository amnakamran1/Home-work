import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  title = 'Student login form';

  studentForm: FormGroup = new FormGroup({
    fname: new FormControl("",[Validators.required,Validators.minLength(4)]),

    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(4)]),
  });
 formValue: any;
  onSubmit() {
    this.formValue = this.studentForm.value;
  }

}
