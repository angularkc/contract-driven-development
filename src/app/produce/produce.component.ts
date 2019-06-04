import {Component, OnDestroy} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {ProduceService} from './produce.service';
import {Produce} from '../models/produce.model';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-produce',
  templateUrl: './produce.component.html',
  styleUrls: ['./produce.component.css'],
  providers: [
    ProduceService
  ]
})
export class ProduceComponent implements OnDestroy {
  list$ = this.service.list$;
  searchInput = new FormControl('');
  sub = new Subscription();
  newItemForm = new FormGroup({
    aProperty: new FormControl()
  });

  constructor(private service: ProduceService) {
    service.query();
    const searchSub = this.searchInput.valueChanges.pipe(filter(searchText => !!searchText), debounceTime(1000), distinctUntilChanged()).subscribe((searchValue) => {
      service.query(searchValue);
    });
    this.sub.add(searchSub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addItem(item: Produce) {
    console.log(item);
    this.service.add(item);
  }

  deleteItem(item: Produce) {
    this.service.delete(item);
  }
}
