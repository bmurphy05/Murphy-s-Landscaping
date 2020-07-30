import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobsComponent } from './jobs/jobs.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseDetailComponent } from './expenses/expense-detail/expense-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserDetailComponent
      }
    ]
  },
  {
    path: 'jobs',
    component: JobsComponent,
    children: [
      {
        path: ':id',
        component: JobDetailComponent
      }
    ]
  },
  {
    path: 'expenses',
    component: ExpensesComponent,
    children: [
      {
        path: ':id',
        component: ExpenseDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
