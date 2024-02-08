import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  sendEmail(data: any) {
    // This will call httpClient and send the email to the Backend
    console.log('Email is in process', data);
  }
}
