import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent }        from './app.page-home';
import { AboutComponent }        from './app.page-about';
import { PageDefault }           from './app.pagedefault';

const appRoutes: Routes = [
  { path: 'page-home', component: HomeComponent },
  { path: 'page-about', component: AboutComponent },
  { path: '', redirectTo: '/page-home', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
