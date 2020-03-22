import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centers-list',
  templateUrl: './centers-list.component.html',
  styleUrls: ['./centers-list.component.scss'],
})
export class CentersListComponent implements OnInit {
  medicalCenters: Center[];

  constructor(
    private networkService: NetworkService,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.medicalCenters = this.store.getState().medicalCenters;
  }

  chooseCenter(medicalCenter) {
    this.networkService
      .chooseCenter(medicalCenter)
      .subscribe((ticketNumber) => {
        const state = this.store.getState();
        state.center = medicalCenter;
        state.ticketNumber = ticketNumber;
        this.store.setState(state);

        console.log(
          `Navigating to ticket page with ticketNumber: ${ticketNumber}`
        );
        this.router.navigate(['/ticket']);
      });
  }
}
