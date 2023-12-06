import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../services/subject.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm !: FormGroup

  constructor(private userData:SubjectService){}


  ngOnInit(): void {
    this.regForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      mobile : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      cpassword : new FormControl('',[Validators.required]),
      role : new FormControl('',[Validators.required]),
    })
  }
  
  get e(){
   return this.regForm.controls;
  }
  
  regData(){
    console.log(this.regForm.value);
    if (this.regForm.value.password !== this.regForm.value.cpassword) {
      alert("password and confirm password must be same")
      return;
    }
this.userData.rgisterUser(this.regForm.value).subscribe({
  next: (result: any) => {
    console.log(result);
    
  },
  error: (error: any) => {
    console.log(error);
    if(error.error.status !== "success"){
      // this.snackBar.openSnackBar(error.error)
      alert(error.error.message)
    }
  },
  complete: () => {
    console.log('completed');
    // this.snackBar.openSnackBar("User Registered")
    alert("register")
  },
});
  }
}
