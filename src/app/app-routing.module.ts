import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { RedirectSuccessComponent } from './redirect-success/redirect-success.component';
import { WowComponent } from './wow/wow.component';
import { AuthGuard } from './guards/auth.guard';
import { CharacterComponent } from './character/character.component';
const routes: Routes = [
    {
        path: '',
        component: RedirectComponent,
    },
    {
        path: 'redirect',
        component: RedirectComponent,
    },
    {
        path: 'redirect-success',
        component: RedirectSuccessComponent,
    },
    {
        path: 'wow',
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: WowComponent
            },
            {
                path: 'character/:name',
                component: CharacterComponent
            }
        ]
    },
    { path: '**', redirectTo: '/redirect' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
