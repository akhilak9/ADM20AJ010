import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User[];
  myData = {};
  constructor(public httpClient:HttpClient) { }

  createUser(data: { name: string; job: string }):Observable<any>{
    return this.httpClient.post("https://reqres.in/api/users?page=2",data);
  }

  updateUser(
    userID: number,
    data: { name: string; job: string }
  ): Observable<any> {
    return this.httpClient.put("https://reqres.in/api/users" + "/" + userID, data);
  }
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete("https://reqres.in/api/users" + "/" + id);
  }
  getAllUsers():any{
    return this.httpClient.get<any>("https://reqres.in/api/users");
  }
}
