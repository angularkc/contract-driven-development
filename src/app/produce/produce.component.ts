import {Component} from '@angular/core';
import {ProduceService} from './produce.service';
import {Produce} from '../models/produce.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-produce',
  templateUrl: './produce.component.html',
  styleUrls: ['./produce.component.css'],
  providers: [
    ProduceService
  ]
})
export class ProduceComponent {
  list$ = this.service.list$;
  newItemForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    subName: new FormControl(),
    quantity: new FormControl(null, Validators.required)
  });

  constructor(private service: ProduceService) {
    service.query();
  }

  addItem() {
    if (this.newItemForm.invalid) {
      this.newItemForm.markAsTouched();
      return;
    }
    this.service.add(this.newItemForm.value);
  }

  deleteItem(item: Produce) {
    this.service.delete(item);
  }

  onSearch(value) {
    this.service.query(value);
  }
}
