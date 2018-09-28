import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import{Router} from'@angular/router'






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  
    private service:UserService,
    private router: Router,
  

  ) { }

  ngOnInit() {
    this.service.getUsers();

  }

  checkForLogin(){

    const user= (document.body.querySelector("#user") as HTMLInputElement);
    const pass= (document.body.querySelector("#pass") as HTMLInputElement);
    this.service.checkForlogin(user.value,pass.value)
    if(this.service.logged){
      this.router.navigate(['/userView']);
    }
    else{
      this.router.navigate(['/login']);
    }    
  } 
}
