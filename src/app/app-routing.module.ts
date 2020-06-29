import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

  
  const routes: Routes = [
  {
  path: '',
  loadChildren: () =>
  import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
  path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
    {
      path: 'feed1',
      loadChildren: () => import('./pages/feed1/feed1.module').then( m => m.Feed1PageModule)
    },
    {
      path: 'feed2',
      loadChildren: () => import('./pages/feed2/feed2.module').then( m => m.Feed2PageModule)
    },
    {
      path: 'feed3',
      loadChildren: () => import('./pages/feed3/feed3.module').then( m => m.Feed3PageModule)
    },
    {
      path: 'verify-email',
      loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
    },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },  {
    path: 'songs',
    loadChildren: () => import('./pages/songs/songs.module').then( m => m.SongsPageModule)
  },
  {
    path: 'call',
    loadChildren: () => import('./pages/call/call.module').then( m => m.CallPageModule)
  },
  {
    path: 'breathe',
    loadChildren: () => import('./pages/breathe/breathe.module').then( m => m.BreathePageModule)
  }


  ];
  @NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}
 
  
