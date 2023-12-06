import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { SubjectService } from '../services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user: any;
  userData: any;
  Role: any;
  showmat: any;

  constructor(private event: EventService, private material: SubjectService,private router:Router) {
    this.user = localStorage.getItem('user');
    this.userData = this.user ? JSON.parse(this.user) : null;
    if (this.userData) {
      this.Role = this.userData.role;
    }
    this.showAllMaterial();
  }

  showAllMaterial() {
    this.material.showMat().subscribe((res: any) => {
      console.log(res.technologies);
      this.showmat = res.technologies;
    });
  }

  goToContent(show:any){
    console.log("show",show);
    this.router.navigate(['/content', show])
  }
}
