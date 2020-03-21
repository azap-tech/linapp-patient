import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  getDepartments(): Observable<string[]> {
    return of(['75', '76', '77', '2B']);
  }

  getCenters(): Observable<Center[]> {
    const centers: Center[] = [];
    for (let i = 0; i < 20; i++) {
      centers.push({
        name: `Center ${i + 1}`,
        address: `Address ${i + 1}`,
        minsToWait: i * 5,
      });
    }

    return of(centers);
  }

  getReasons(): Observable<string[]> {
    return of(['Fracture', 'Cardio', 'Gastro', 'Covid19']);
  }

  getMinsWaitingTime(): Observable<number> {
    return of(88);
  }
}
