import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, shareReplay, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userCache = new Map<number, any>();

  constructor(private _HttpClient: HttpClient) { }

  getUsers(page: number): Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users?page=${page}`)
  }



  getUser(id: number): Observable<any> {
    if (this.userCache.has(id)) {
      return of(this.userCache.get(id));
    } else {
      return this._HttpClient.get<any>(`https://reqres.in/api/users/${id}`).pipe(
        map((response: any) => response.data),
        tap(user => this.userCache.set(id, user)),
        shareReplay(1)
      );
    }
  }

}
