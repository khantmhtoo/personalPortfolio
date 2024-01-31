import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import { MNoti } from './notification.model';

@Injectable({
  providedIn: 'platform',
})
export class NotificationService {
  private notiType: MNoti = new MNoti();
  private notiTypeBS = new BehaviorSubject<MNoti | null>(this.notiType);
  public $notiTypeBS = this.notiTypeBS.asObservable();

  showNoti() {
    this.notiTypeBS.next(this.notiType);
  }

  updataNotification(severity: string, summary: string, detail: string) {
    let msg = {
      severity: severity,
      summary: summary,
      detail: detail,
    };
    this.notiType.updateNoti(msg);
    this.showNoti();
  }

  showError(summary?: string, detail?: string) {
    this.updataNotification('error', summary || '', detail || '');
  }

  showSucces(summary?: string, detail?: string) {
    this.updataNotification('success', summary || '', detail || '');
  }

  showWarn(summary?: string, detail?: string) {
    this.updataNotification('warn', summary || '', detail || '');
  }

  showInfo(summary?: string, detail?: string) {
    this.updataNotification('info', summary || '', detail || '');
  }
}
