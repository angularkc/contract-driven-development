import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Produce} from '../models/produce.model';

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html'
})
export class AddItemComponent {
  @Input() label: string;
  @Output() addItem = new EventEmitter<Produce>();
  newItem: Produce = {};

  submit() {
    this.addItem.emit(this.newItem);
    this.newItem = {};
  }
}
