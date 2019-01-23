



import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';


export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
       { path: 'admin', loadChildren: 'app/pages/administration/admin.module#AdminModule', data: { breadcrumb: 'Logging' } }

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
