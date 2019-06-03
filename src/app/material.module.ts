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
  MatGridListModule
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
  MatGridListModule
];

@NgModule({
  imports: [...moduleExports],
  exports: [...moduleExports]
})
export class MaterialModule {}
