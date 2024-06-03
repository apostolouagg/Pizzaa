import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, finalize, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/Interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserRegister } from '../shared/Interfaces/IUserRegister';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  isRequestPending = false;

  constructor(private http:HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User {
    return this.userSubject.value;
  }

  login(userLogin:IUserLogin):Observable<User>{
    if (this.isRequestPending) {
      return EMPTY;
    }
    this.isRequestPending = true;

    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
        },
        error: (errorResponse) => {
          alert('Wrong Email or Password!');
        }
      }),

      finalize(() => this.isRequestPending = false)
    );
  }

  register(userRegister:IUserRegister):Observable<User>{

    if (this.isRequestPending) {
      return EMPTY;
    }
    this.isRequestPending = true;

    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          alert('Registration Succeeded!');
          return;
        },
        error: (errorResponse) => {
          alert('User already exists. Please Log in!');
          return;
        }
      }),

      finalize(() => this.isRequestPending = false)
    );
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }


  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson){
      return JSON.parse(userJson) as User;
    }
    else{
      return new User();
    }
  }
  
}
