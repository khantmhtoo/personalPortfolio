import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  computed,
  inject,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  _notiService = inject(NotificationService);
  _messageService = inject(MessageService);
  _cdr = inject(ChangeDetectorRef);

  notiData: any;

  ngOnInit(): void {
    this._notiService.$notiTypeBS.subscribe((msg) => {
      this.notiData = msg?.getNoti();
      this.showMsg(this.notiData);
      this._cdr.detectChanges();
    });
  }

  showMsg(msg: any) {
    this._messageService.add(msg);
  }
}
