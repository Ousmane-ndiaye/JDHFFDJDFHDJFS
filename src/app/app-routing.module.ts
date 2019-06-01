import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
	{ path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
	{ path: 'menu', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
	{
		path: 'assistances',
		loadChildren: './pages/assistances/assistances.module#AssistancesPageModule'
	},
	{
		path: 'services-recharge',
		loadChildren: './pages/services-recharge/services-recharge.module#ServicesRechargePageModule'
	}
];
@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
