import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Demo App';
  users:any;
  constructor(private accountService:AccountService,private http:HttpClient){
  }
  ngOnInit() {
   //this.getUsers();
   this.setCurentUser();
  }

  setCurentUser(){
    const user:User=JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  // getUsers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe(response=>{
  //     this.users=response;
  //     console.log('Users on app components');
  //     console.log(this.users);
  //   },error=>{
  //     console.log(error.message);
  //   })
  // }
 }
