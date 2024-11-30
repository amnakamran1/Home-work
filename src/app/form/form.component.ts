import { CommonModule,  } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,Validators ,FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title: string='Student Form';

  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      alert('Form Submitted Successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  }


