import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  constructor(private messageService: MessageService) {
    // setTimeout(() => {
    //   this.show();
    //   console.log('Ran');
    // }, 1000);
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
      life: 100000,
    });
  }
}
