import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Note: possible values for pathMatch: {prefix,full}
  { path: '', component: HomePageComponent },
  { path: 'department-list', component: DepartmentListComponent },
  { path: 'department-list/:id', component: DepartmentDetailComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent } // Note: 'wildcard' route should be the last in the routing list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  HomePageComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent
];
