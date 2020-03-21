import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CentersListComponent } from './pages/centers-list/centers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    CentersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
