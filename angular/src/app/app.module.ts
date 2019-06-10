import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduceComponent } from './produce/produce.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResponseDialogComponent } from './response-dialog/response-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduceComponent,
    SearchFieldComponent,
    ResponseDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [ResponseDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
