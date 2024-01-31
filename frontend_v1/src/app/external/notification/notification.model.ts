import { Message } from 'primeng/api';

export type MCNoti = Message;

export class MNoti {
  private defaultMsg: MCNoti = {
    severity: 'info',
    summary: '',
    detail: '',
    life: 3000,
  };
  private data: MCNoti = Object.assign({}, this.defaultMsg);

  getNoti() {
    return this.data;
  }

  updateNoti(msg: any) {
    this.data = Object.assign({}, this.data, msg);
  }
}
