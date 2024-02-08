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
import { ContactService } from './services/contact.service';

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
  _contact = inject(ContactService);

  form!: FormGroup;
  currThemeDark?: any = this._theme.signalThemeDark();

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      subject: ['', [Validators.required]],
    });
  }

  onSend() {
    if (this.form.valid) {
      this._noti.showSucces(
        'Success',
        'Email has been send and will be responded within 3 days'
      );
      this._contact.sendEmail(this.form.value);
      this.form.reset();
    } else {
      this._noti.showError('Error', 'Please fill in valid information');
    }
  }
}
