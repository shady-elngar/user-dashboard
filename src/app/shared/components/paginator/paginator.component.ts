import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() totalLength: number = 0
  @Output() setPageIndex: EventEmitter<number> = new EventEmitter();


  handlePageEvent(event: any) {
    let pageIndex = event.pageIndex + 1
    this.setPageIndex.emit(pageIndex)
  }

}
