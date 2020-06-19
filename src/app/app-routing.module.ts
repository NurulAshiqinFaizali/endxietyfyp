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
      path: 'edit-profile/:id',
      loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
    },
    {
      path: 'create-profile',
      loadChildren: () => import('./pages/create-profile/create-profile.module').then( m => m.CreateProfilePageModule)
    },
    {
      path: 'create-contact',
      loadChildren: () => import('./pages/create-contact/create-contact.module').then( m => m.CreateContactPageModule)
    },
    {
      path: 'edit-contact/:id',
      loadChildren: () => import('./pages/edit-contact/edit-contact.module').then( m => m.EditContactPageModule)
    }
  ];
  @NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}
 
  
