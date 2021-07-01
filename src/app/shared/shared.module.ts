import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { RandomColorModalComponent } from './components/random-color-modal/random-color-modal.component';
import { AddColorModalComponent } from './components/add-color-modal/add-color-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RandomColorModalComponent,
    AddColorModalComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    RandomColorModalComponent,
    AddColorModalComponent
  ],
  providers: []
})

export class SharedModule {}
