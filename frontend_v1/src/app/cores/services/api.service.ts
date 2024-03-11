import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);
  private uri: string = 'http://localhost:3000/api';

  getData(uriAccess: string) {
    return this._http.get(`${this.uri}/${uriAccess}`);
  }

  postData(uriAccess: string, data: any) {
    return this._http.post(`${this.uri}/${uriAccess}`, data);
  }

  deleteData(uriAccess: string, id: string) {
    return this._http.delete(`${this.uri}/${uriAccess}/${id}`);
  }

  updateData(uriAccess: string, id: string, data: any) {
    return this._http.put(`${this.uri}/${uriAccess}/${id}`, data);
  }
}
