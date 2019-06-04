import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-field',
  template: `
    <mat-form-field>
      <input matInput [formControl]="search">
    </mat-form-field>
  `,
  styles: []
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  sub: Subscription;
  search = new FormControl();
  @Output() searchUpdate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.sub = this.search.valueChanges.subscribe((value) => {
      this.searchUpdate.emit(value)
    })
  }

  ngOnDestroy(): void {

  }

}
