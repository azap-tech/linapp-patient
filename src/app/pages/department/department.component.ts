import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

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

  constructor(private networkService: NetworkService) {}

  ngOnInit() {
    this.departments = this.networkService.getDepartments().pipe(
      map((departments) => {
        const [defaultDepartment] = departments;
        console.log(`Default form value: ${defaultDepartment}`);
        this.departmentForm.patchValue({
          department: defaultDepartment.name,
        });
        return departments;
      })
    );
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      const choosenDepartment = this.departmentForm.value;
      console.log(`Choosen department: ${choosenDepartment.department}`);
    }
  }
}
