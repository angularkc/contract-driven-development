import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

const moduleExports = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatGridListModule,
  MatSnackBarModule,
  MatDialogModule,
  FlexLayoutModule
];

@NgModule({
  imports: [...moduleExports],
  exports: [...moduleExports]
})
export class MaterialModule {}
