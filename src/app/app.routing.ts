
import { Routes, RouterModule, PreloadAllModules, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';




export const routes: Routes = [


  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },


  { path: '', redirectTo: 'pages', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules, useHash: true
});
