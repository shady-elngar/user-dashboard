import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar
  ) {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['id']).subscribe(
        {
          next: (user) => {
            this.user = user
          },
          error(err) {
            if (err.status === 404) {
              snackBar.open('User Not Found', 'Close', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['custom-snackbar'],
              });
            }
          },
        });
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
