import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private searchSubject = new Subject<string>();

  constructor(private router: Router) {
    this.setupSearchSubscription();
  }

  private setupSearchSubscription(): void {
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((id: string) => {
      if (id) {
        this.router.navigate(['/user', id]);
      }
    });
  }

  search(event: any): void {
    const id = event.target.value;
    this.searchSubject.next(id);
  }
}
