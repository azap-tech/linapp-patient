import { Injectable } from '@angular/core';
import { MockService } from './mock.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private mockService: MockService) {}
  getDepartments(): Observable<Department[]> {
    return this.mockService.getDepartments();
  }

  getCenters(): Observable<Center[]> {
    return this.mockService.getCenters();
  }

  getReasons(): Observable<string[]> {
    return this.mockService.getReasons();
  }

  getMinsWaitingTime(): Observable<number> {
    return this.mockService.getMinsWaitingTime();
  }

  chooseCenter(center): Observable<string> {
    return this.mockService.chooseCenter();
  }

  chooseDepartment(department: Department): Observable<Center[]> {
    return this.mockService.chooseDepartment();
  }
}
