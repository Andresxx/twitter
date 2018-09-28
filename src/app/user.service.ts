import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Tweet } from './structures/Tweet';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userName:string;
  public logged:boolean;

   public listOfUsers;



  

  constructor(private http: HttpClient) {
    this.userName='';
    this.logged=false;
    
   }
 
  checkForlogin(user:string,pass:string){

    this.logged=false;
    this.listOfUsers.forEach(u => {
        if(user==u.userName && pass == u.password){
          this.logged=true;
          this.userName=u.userName;
          localStorage.setItem("user",JSON.stringify(this.userName));     
        }
    });
    
  }

  getUsers(){   
    return this.http.get('http://localhost:3000/api/users').subscribe(
      data => { this.listOfUsers = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );;
  }

  getTweets(){
    return this.http.get('http://localhost:3000/api/tweets');
  }
  postTweet(tweet:Tweet){

    return this.http.post('http://localhost:3000/api',tweet);
  }

  updateTweet(listTweet:Tweet[]){
    return this.http.put('http://localhost:3000/api',listTweet);
  }

  deleteTweet(listTweet:Tweet[]){
    return this.http.delete('http://localhost:3000/api');
  }
}
