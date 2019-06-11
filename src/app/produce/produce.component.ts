import {Component} from '@angular/core';
import {ProduceService} from './produce.service';
import {Produce} from '../models/produce.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-produce',
  templateUrl: './produce.component.html',
  providers: [ProduceService]
})
export class ProduceComponent {
  list$ = this.service.list$;
  // Validators.pattern()
  newItemForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]),
    subName: new FormControl(""),
    quantity: new FormControl(null, [Validators.required])
  });

  constructor(private service: ProduceService) {
    service.query();
  }

  addItem() {
    if (this.newItemForm.invalid) {
      this.newItemForm.markAsTouched();
      this.newItemForm.markAsDirty();
      return;
    }
    this.service.add(this.newItemForm.value, () => this.newItemForm.reset());
  }

  deleteItem(item: Produce) {
    this.service.delete(item);
  }

  onSearch(value) {
    this.service.query(value);
  }
}
