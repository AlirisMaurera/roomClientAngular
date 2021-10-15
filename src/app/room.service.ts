import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url:string = "http://localhost:8082/api/v1/rooms";


  constructor(private http:HttpClient) { }

  
  getAll():Observable<Room[]>{
    return this.http.get<Room[]>(this.url);
  }

  create(room:Room):Observable<Room>{
    return this.http.post<Room>(this.url, room);
  }

  get(id:number):Observable<Room>{
    return this.http.get<Room>(this.url+'/'+id);
  }

  update(room:Room):Observable<Room>{
    return this.http.put<Room>(this.url+"/"+ room.id, room);

  }

  delete(id:number):Observable<Room>{
    return this.http.delete<Room>(this.url+'/'+id);
  }

}
