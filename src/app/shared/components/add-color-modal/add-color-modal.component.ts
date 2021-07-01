import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IColor} from "../../interfaces/colors.interface";

@Component({
  selector: 'app-add-color-modal',
  templateUrl: './add-color-modal.component.html',
  styleUrls: ['./add-color-modal.component.scss']
})
export class AddColorModalComponent implements OnInit {

  showError = false;
  colorDontExist = false;

  @Input() dialogNewColor: boolean;
  @Input() colors: IColor[];

  @Output() closeNewColorModal = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    if(!this.isColorValid(this.form.controls.color.value)) {
      this.colorDontExist = true;
      return false;
    }
    if(this.form.valid) {
      this.colors.push({id: this.colors.length + 1, name: this.form.controls.name.value, color: this.form.controls.color.value});
      this.closeNewColorModal.emit(false);
      console.log(`New Color ${this.form.controls.name.value}`);
    }
  }

  isColorValid(strColor: string){
    let s = new Option().style;
    s.color = strColor;
    let colorName = s.color == strColor;
    let colorHex = /^#[0-9A-F]{6}$/i.test(strColor);

    if(colorName == true || colorHex == true){
      return true;
    } else{
      return false;
    }
  }

  close(){
    this.closeNewColorModal.emit(false);
  }

}
