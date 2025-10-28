import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Jobs } from './pages/jobs/jobs';
import { Users } from './pages/users/users';
import { Reports } from './pages/reports/reports';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'jobs', component: Jobs },
    { path: 'users', component: Users },
    { path: 'reports', component: Reports },
    { path: 'profile', component: Profile },
    // { path: 'settings', component: Settings },
    // { path: 'login', component: LoginComponent }
];
