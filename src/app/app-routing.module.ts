import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./core/main/main.component";


const routes: Routes = [
    { path: '',
      component: MainComponent,
      loadChildren: () => import('./core/main.module').then(m => m.MainModule)
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
