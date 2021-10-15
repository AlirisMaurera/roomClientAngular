import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateRoomComponent } from './create-room/create-room.component';

import { FormRoomComponent } from './create-room/form-room.component';

const routes:Routes=[
  {path:'', redirectTo:'/rooms', pathMatch:'full'},
  {path:'rooms', component:CreateRoomComponent},
  {path:'rooms/add', component:FormRoomComponent},
  {path:'rooms/add/:id', component:FormRoomComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    FormRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
