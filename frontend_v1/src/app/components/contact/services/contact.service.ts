import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_CONFIG } from '../../../cores/configs/app.config';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private _http = inject(HttpClient);

  public sendEmail(data: any): void {
    this._http.post(`${API_CONFIG}/contact`, data).subscribe(
      (res) => {
        console.log('Email was sent successfully', res);
      },
      (error) => {
        console.error('Error sending mail', error);
      }
    );
  }
}
