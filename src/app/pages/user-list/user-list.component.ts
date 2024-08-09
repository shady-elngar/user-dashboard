import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, pipe } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('700ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  totalLength: number = 0
  pageIndex: number = 1
  isLoading: boolean = false
  constructor(private _UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers()
  }

  setPageIndex(pageIndex: number) {
    this.pageIndex = pageIndex
    this.getUsers()
  }

  getUsers() {
    this.isLoading = true
    this._UserService.getUsers(this.pageIndex)
      .pipe(
        finalize(() => { this.isLoading = false })
      ).subscribe((user: any) => {
        this.users = user.data;
        this.totalLength = user.total
      });
  }


  navigateToUser(id: number): void {
    this.router.navigate(['/user', id]);
  }

}
