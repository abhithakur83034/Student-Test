import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../services/subject.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  fileInp: any;
  edituserProfile!: FormGroup;
  user: any;
  id: any;
  userProfile: any;
  singlProfile: any;

  ngOnInit(): void {
    this.edituserProfile = new FormGroup({
      image: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
    });
    this.allUser();
  }

  constructor(private userData: SubjectService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  allUser() {
    this.userData.registereduser().subscribe((res: any) => {
      console.log(res.reg);
      this.userProfile = res.reg.filter((item: any) => item._id === this.id);
      console.log(this.userProfile);
      this.singlProfile = this.userProfile[0];
      this.edituserProfile.patchValue(this.singlProfile);
    });
  }

  onFileChange(event: any) {
    this.fileInp = event.target.files[0];
    console.log(this.fileInp);
  }

  editForm() {
    console.log(this.edituserProfile.value);
    let formData = new FormData();
    formData.append('image', this.fileInp);
    formData.append('name', this.edituserProfile.value.name);
    formData.append('email', this.edituserProfile.value.email);
    formData.append('mobile', this.edituserProfile.value.mobile);
    // formData.append("id",this.id)

    this.userData.updateProfile(formData, this.id).subscribe({
      next: (result: any) => {
        console.log(result);
        this.allUser();
      },
      error: (error: any) => {
        console.log(error);
      },
      complete() {
        console.log('completed');
        alert('completed');
      },
    });
  }
}
