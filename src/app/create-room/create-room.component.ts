import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  titulo: string = "Room List";
  rooms: Room[] = [];

  constructor(private roomsService:RoomService) { }

  ngOnInit(): void {
    this.roomsService.getAll().subscribe(
      r => this.rooms=r
     );
  }

  delete(room:Room): void{
    console.log("Hello form delete");
    this.roomsService.delete(room.id).subscribe(
      res=>this.roomsService.getAll().subscribe(
        respon=>this.rooms=respon
      )
    );
  }

}
