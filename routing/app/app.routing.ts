import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent }         from './app.page-home';
import { FeedbackComponent }     from './app.page-feedback';
import { PageDefault }           from './app.pagedefault';

const appRoutes: Routes = [
  { path: 'page-home', component: HomeComponent },
  { path: 'page-feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/page-home', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
