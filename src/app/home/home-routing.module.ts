import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
{
path: 'home',
component: HomePage,
children: [
{
path: 'feed',
loadChildren: () =>
import('../pages/feed/feed.module').then(m => m.FeedPageModule)
},
{
path: 'endxiety',
loadChildren: () =>
import('../pages/endxiety/endxiety.module').then(
m => m.EndxietyPageModule
)
},
{
path: 'contact',
loadChildren: () =>
import('../pages/contact/contact.module').then(
m => m.ContactPageModule
)
},
{
path: 'profile',
loadChildren: () =>
import('../pages/profile/profile.module').then(
m => m.ProfilePageModule
)
}
]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRouter {}