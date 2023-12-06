import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any;
  userData: any;
  singleProfile:any;
  singleProfiles:any;

  userProfile = new FormGroup({
    // image: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
  });

  constructor(private userDatas:SubjectService,private router: Router) {
    this.user = localStorage.getItem('user');
    this.userData = this.user ? JSON.parse(this.user) : null;
    console.log(this.userData);


    userDatas.registereduser().subscribe((res:any)=>{
      console.log(res);
      this.singleProfile = res.reg.filter((item:any)=> item._id === this.userData._id)
      console.log(this.singleProfile);
      this.userProfile.patchValue(this.singleProfile[0])
      this.singleProfiles = this.singleProfile[0]
      console.log(this.singleProfiles);
      
     })
  }

  editPro(userData: any) {
    console.log('edit', userData);

    this.router.navigate(['/editprofile', userData._id]);
  }
}
