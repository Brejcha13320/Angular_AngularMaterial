import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash : true} )],
    exports: [RouterModule]
})

export class AppRoutingModule {}
