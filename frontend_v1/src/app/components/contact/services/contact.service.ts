import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendEmail() {
    // This will call httpClient and send the email to the Backend
  }
}
