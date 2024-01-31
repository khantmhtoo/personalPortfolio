import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../cores/services/theme.service';
import { NotificationService } from '../../external/notification/notification.service';

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
      this._noti.showError(
        'Error has occur',
        'Please fill in the required information'
      );
      // Just use notification to update the user if the process is completed or not
    }
  }
}
