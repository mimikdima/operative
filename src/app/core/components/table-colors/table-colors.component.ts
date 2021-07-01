import { Component, OnInit } from '@angular/core';
import {IColor} from "../../../shared/interfaces/colors.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-table-colors',
  templateUrl: './table-colors.component.html',
  styleUrls: ['./table-colors.component.scss']
})
export class TableColorsComponent implements OnInit {

  dialogRandomColor = false;
  selectedRow: IColor;
  selectedRowIndex: number;
  dialogNewColor = false;



  colors: Array<IColor> = [
    {id: 1, name: 'Red', color: 'red' },
    {id: 2, name: 'Blue', color: 'blue' },
    {id: 3, name: 'White', color: 'white' },
    {id: 4, name: 'Green', color: 'green' },
    {id: 5, name: 'Yellow', color: 'yellow' }
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

  randomColorDialog(row: IColor, index: number) {
    this.selectedRowIndex = index;
    this.selectedRow = row;
    this.dialogRandomColor = true;
  }

  setRandomColor(event: boolean) {
    const colorsWithoutSelected = this.colors.filter((v: any) => v.color !== this.selectedRow.color)
    let randomIndex = Math.floor(Math.random() * colorsWithoutSelected.length);
    this.colors[this.selectedRowIndex].name  = colorsWithoutSelected[randomIndex].name;
    this.colors[this.selectedRowIndex].color = colorsWithoutSelected[randomIndex].color;
    this.dialogRandomColor = false;
    console.log(`Update ${this.selectedRow.id} to ${colorsWithoutSelected[randomIndex].name}`);
  }

  closeRandomColorModal(event: boolean) {
    this.dialogRandomColor = false;
  }

  closeNewColorModal(event: boolean) {
    this.dialogNewColor = false;
  }

  onSubmit() {
  /*  if(this.isColorValid(this.form.controls.color.value)) {
      this.colors.push({id: this.colors.length + 1, name: this.form.controls.name.value, color: this.form.controls.color.value});
    }*/
  }

  addColor() {
    this.dialogNewColor = true;
  }

}
