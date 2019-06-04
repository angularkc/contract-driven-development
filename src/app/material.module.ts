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

];

@NgModule({
  imports: [...moduleExports],
  exports: [...moduleExports]
})
export class MaterialModule {}
