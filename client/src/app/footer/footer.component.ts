import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isLoggedIn: boolean = false;
  user:any
  userData:any;
  Role:any;


  constructor(private router: Router, private event: EventService) {
    let isLog = new BehaviorSubject(null);
    isLog.subscribe((res) => {
      console.log('islog', res);
    });
  
    this.user = localStorage.getItem('user')
    this.userData = this.user ? JSON.parse(this.user) : null;
    if(this.userData){
      this.Role = this.userData.role;
      console.log(this.Role);
      
    }
  }

  ngOnInit(): void {
    this.event.logObserve.subscribe((res) => {
      console.log('from footer', res);
      if (res) {
        if (localStorage.getItem('user')) {
          this.isLoggedIn = true;
          console.log('login', this.isLoggedIn);
        } else {
          console.log('go to');
          this.isLoggedIn = false;
          console.log('default', this.isLoggedIn);
        }
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logOut() {
    console.log('clicked logout');
    this.isLoggedIn = false;
    localStorage.clear();
    this.event.logObserve.next({});
    this.router.navigate(['/login']);
    // this.event.openSnackBar("You'r No Longer Login To This")
  }


  record(){
    this.router.navigate(['/record',this.userData._id])
  }



  schedule(){
    this.router.navigate(['/schedule',this.userData._id])
  }








}
