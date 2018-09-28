import { Component, OnInit,Inject } from '@angular/core';
import { UserService } from '../user.service';
import{Router} from '@angular/router'
import { Tweet } from '../structures/Tweet';
import { Commentary } from '../structures/Commentary';
import * as moment from 'moment'; 



@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  public userLogged:string;
  public listOfTweets: Tweet[];
  public aux;




  constructor(
    private service:UserService,
    private router: Router,
   
  ) { }



  
  ngOnInit() {

    var aux;
    this.service.getTweets().subscribe(
      data=>{
        aux=data;
        this.listOfTweets=aux;
      }
    );
      this.userLogged=localStorage.getItem('user').replace(/['"]+/g, '');
  }


  logout(){
    this.router.navigate(['/login'])
  }


  clean(){
    localStorage.clear();
  }



  post(){
    const input= (document.body.querySelector("#inp-post") as HTMLInputElement);
    let tweetAux: Tweet=new Tweet();
    tweetAux.idTweet=moment().unix();
    tweetAux.user=this.userLogged;
    tweetAux.tweet=input.value;
    tweetAux.listOfComments=[];
    input.value='';
    this.service.postTweet(tweetAux).subscribe(
      data => { 
        this.aux = data;
        this.listOfTweets.push(this.aux);      
      }
    )

  }

  updateTheListOfTweets(){
    this.service.updateTweet(this.listOfTweets).subscribe(
      data => { 
        this.aux = data;
        this.listOfTweets=this.aux;
      }
    );
  }

  delate(idToDelate: number){
    this.listOfTweets.forEach(tweet => {
      if(tweet.idTweet==idToDelate){
        this.listOfTweets.splice(this.listOfTweets.indexOf(tweet),1);
      }
    });
    this.updateTheListOfTweets();
  }




  guardar(idtweet: number){
      const input= (document.body.querySelector("[id='"+idtweet+"']") as HTMLInputElement);
      this.listOfTweets.forEach(tweet => {
        if(idtweet==tweet.idTweet){
          tweet.tweet=input.value;
        }
      });
      this.updateTheListOfTweets();

  }



  comentar(idtweet: number){
    let commentAux: Commentary=new Commentary();
    const input= (document.body.querySelector("[id='comentario"+idtweet+"']") as HTMLInputElement);
    this.listOfTweets.forEach(tweet => {
      if(tweet.idTweet== idtweet){
        commentAux.idCommentary=moment().unix();
        commentAux.Comment=input.value;
        commentAux.user=this.userLogged;
        tweet.listOfComments.push(commentAux);
      }
    });
    this.updateTheListOfTweets();
    input.value='';       
  }


  guardarComentario(idCommentary:number){
    const input= (document.body.querySelector("[id='"+idCommentary+"']") as HTMLInputElement);    
    this.listOfTweets.forEach(tweet => {
      tweet.listOfComments.forEach(commentary => {
        if(commentary.idCommentary== idCommentary){
          commentary.Comment=input.value;
        }
      });
    });
    this.updateTheListOfTweets();       
  }


  delateCommentry(idCommentary:number){
    this.listOfTweets.forEach(tweet => {
      tweet.listOfComments.forEach(commentary => {
        if(commentary.idCommentary== idCommentary){
          tweet.listOfComments.splice(tweet.listOfComments.indexOf(commentary),1);
        }
      });
    });
    this.updateTheListOfTweets();   
  }

}







