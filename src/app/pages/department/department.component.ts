import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  departments: Observable<Department[]>;
  departmentForm = new FormGroup({
    department: new FormControl(''),
  });

  constructor(
    private networkService: NetworkService,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.departments = this.networkService.getDepartments().pipe(
      map((departments) => {
        const [defaultDepartment] = departments;
        console.log(`Default form value: ${defaultDepartment.name}`);
        this.departmentForm.patchValue({
          department: defaultDepartment.name,
        });
        return departments;
      })
    );
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      const { department } = this.departmentForm.value;
      console.log(`Choosen department: ${department}`);
      this.networkService
        .chooseDepartment(department)
        .subscribe((medicalCenters) => {
          let state = this.store.getState();
          state.department = department;
          state.medicalCenters = medicalCenters;
          this.store.setState(state);
          console.log('Medical centers: ', medicalCenters);
          this.router.navigate(['/centers-list']);
        });
    }
  }
}
