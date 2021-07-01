import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { MainComponent } from './main/main.component';
import { TableColorsComponent } from './components/table-colors/table-colors.component';
import {MainRoutingModule} from "./main-routing.module";


@NgModule({
  declarations: [
    MainComponent,
    TableColorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  exports: [

  ],
  providers: []
})

export class MainModule {}
