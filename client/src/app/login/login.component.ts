import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../services/subject.service';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  logForm !: FormGroup

  constructor(private userData:SubjectService, private router:Router, private event:EventService){}


  ngOnInit(): void {
    this.logForm = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    })
  }
  
  get e(){
   return this.logForm.controls;
  }
  
  logData(){
    console.log(this.logForm.value);
this.userData.userLogin(this.logForm.value).subscribe({
  next : (result:any)=>{
console.log(result);
if(result.status === "success"){
  localStorage.setItem('user', JSON.stringify(result.log));
  this.event.logObserve.next({user:true})
  this.router.navigateByUrl('')
}
},
  error:(error:any)=>{
    console.log(error);
  },
  complete :()=>{
    console.log('login successfully');
    
  }
})
    
  }
}
