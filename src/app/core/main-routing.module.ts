import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TableColorsComponent} from "./components/table-colors/table-colors.component";

const routes: Routes = [
    {path: '', component: TableColorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
