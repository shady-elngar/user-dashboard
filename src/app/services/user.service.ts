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
  return this._HttpClient.get(`https://dummyjson.com/users?limit=6&skip=${(page - 1) * 6}`);
}




 getUser(id: number): Observable<any> {
  if (this.userCache.has(id)) {
    return of(this.userCache.get(id));
  } else {
    return this._HttpClient.get<any>(`https://dummyjson.com/users/${id}`).pipe(
      tap(user => this.userCache.set(id, user)),
      shareReplay(1)
    );
  }
}


}
