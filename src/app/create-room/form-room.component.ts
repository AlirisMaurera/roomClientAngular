import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-form-room',
  templateUrl: './form-room.component.html',
  styleUrls: ['./form-room.component.css']
})
export class FormRoomComponent implements OnInit {

  room:Room = new Room();
  titulo:string="Create Room";
  id!:number;
  
  constructor(private roomService: RoomService, private router:Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void{
      this.activatedRouter.params.subscribe(
  e =>{let id=e['id'];
        if (id){
        this.roomService.get(id).subscribe(
         es => this.room=es
          );
      } }
      );

  }
  create():void{
    console.log(this.room);
    this.roomService.create(this.room).subscribe(
      res =>this.router.navigate(['/rooms'])
    );
  }

  update():void{
    this.roomService.update(this.room).subscribe(
      e=>this.room=new Room());
      this.router.navigate(['/rooms']);
    
    
  }
}
