import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  _fb = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this._fb.group({
      name: '',
      email: '',
      subject: '',
    });
  }
  onSend() {
    console.log('Email has been send.');
  }
}
