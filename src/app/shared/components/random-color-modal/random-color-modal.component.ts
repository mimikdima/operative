import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IColor} from "../../interfaces/colors.interface";

@Component({
  selector: 'app-random-color-modal',
  templateUrl: './random-color-modal.component.html',
  styleUrls: ['./random-color-modal.component.scss']
})
export class RandomColorModalComponent implements OnInit {

  @Input() dialogRandomColor: boolean;
  @Input() selectedRow: IColor;

  @Output() closeRandomColorModal = new EventEmitter<boolean>();
  @Output() setRandomColorModal = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  setRandomColor() {
    this.setRandomColorModal.emit(true);
  }

  close(){
    this.closeRandomColorModal.emit(false);
  }

}
