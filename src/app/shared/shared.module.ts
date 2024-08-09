import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';



@NgModule({
  declarations: [
    CardComponent,
    PaginatorComponent,
    SpinnerComponent,
    HoverHighlightDirective,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule, 
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    CardComponent,
    PaginatorComponent,
    MatSnackBarModule,
    SpinnerComponent,
    HoverHighlightDirective
  ]
})
export class SharedModule { }
