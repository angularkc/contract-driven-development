import { Injectable } from '@angular/core';
import {ProduceHttpService} from './produce.http.service';
import {BehaviorSubject} from 'rxjs';
import {Produce} from '../models/produce.model';
import {NotificationService} from '../services/notification.service';

@Injectable()
export class ProduceService {
  private currentQuery = '';
  private listSource = new BehaviorSubject<Produce[]>([]);
  list$ = this.listSource.asObservable();

  constructor(private httpService: ProduceHttpService,
              private notification: NotificationService) {
    this.loadItems();
  }

  query(query = ''): void {
    this.currentQuery = query;
    this.loadItems();
  }

  add(item: Produce, success = () => {}, error = () => {}) {
    this.httpService.add(item).subscribe(() => {
      this.loadItems();
      this.notification.notify('Successfully added produce.');
      success();
    }, () => {
      this.notification.notify('Failed to add produce.');
      error();
    })
  }

  delete(item: Produce) {
    this.httpService.delete(item).subscribe(() => {
      this.loadItems();
      this.notification.notify(`Successfully deleted ${item.name}.`)
    }, () => this.notification.notify(`Failed to delete ${item.name}.`))
  }


  private loadItems(): void {
    this.httpService.query(this.currentQuery).subscribe((items) => {
      this.listSource.next(items);
    }, () => {
      this.notification.notify('Failed to retrieve produce list.')
    });
  }
}

