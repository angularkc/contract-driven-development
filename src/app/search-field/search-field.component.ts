import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-field',
  template: `
    <mat-form-field (keyup.enter)="submitSearch()">
      <mat-label>Search</mat-label>
      <input matInput [formControl]="searchControl">
    </mat-form-field>
    <button mat-raised-button type="button" (click)="submitSearch()">Submit</button>
  `
})
export class SearchFieldComponent {
  searchControl = new FormControl();
  @Output() search = new EventEmitter<string>();

  submitSearch() {
    this.search.emit(this.searchControl.value)
  }

}
