import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Hero } from '../hero';
import  HEROES   from '../../assets/ser.json';
import { HeroService } from '../hero.service';
import {Router} from '@angular/router'
const hero = (<any>HEROES);
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login : any;
pathTO:string;
  constructor(private heroService: HeroService,private router:Router) {
    
     
 
   
   }

  ngOnInit() {
    
    
  }
  onSubmitTemplateBased(f){
    
    

    for(let h of hero)
     {
      console.log(h.id);
      console.log(f.value.uname);
      console.log(h.password);
      console.log(f.value.psw);
      if(h.id==f.value.uname && h.password==f.value.psw){
    //  this.pathTO = "login/info";
  //  return this.pathTO;
  this.router.navigate(['/info']);
      }      

     } 
  }
 
 
}
