import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotificationService } from '../../cores/services/notification.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../cores/services/theme.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  _fb = inject(FormBuilder);
  _noti = inject(NotificationService);
  _theme = inject(ThemeService);
  form!: FormGroup;
  currThemeDark?: any = this._theme.signalThemeDark();

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
    });
  }

  onSend() {
    if (this.form.valid) {
      console.log('Email has been send.');
      this.form.reset();
      // Just use notification to update the user if the process is completed or not
    } else {
      console.log('Email is not valid');
      // Just use notification to update the user if the process is completed or not
    }
  }
}
