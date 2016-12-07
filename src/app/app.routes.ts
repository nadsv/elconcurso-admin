import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestsComponent } from './contests/contests.component';

const routes: Routes = [
    {path: '', redirectTo: 'contests', pathMatch : 'full'},
    {path: 'contests', component: ContestsComponent}
];

export const routing = RouterModule.forRoot(routes);
