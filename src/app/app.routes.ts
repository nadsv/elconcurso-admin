import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestsComponent } from './contests/contests.component';
import { FormContestComponent } from './form-contest/form-contest.component';

const routes: Routes = [
    {path: '', redirectTo: 'contests', pathMatch : 'full'},
    {path: 'contests', component: ContestsComponent},
    {path: 'form/:id', component: FormContestComponent}
];

export const routing = RouterModule.forRoot(routes);
