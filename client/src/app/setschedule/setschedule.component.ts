import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-setschedule',
  templateUrl: './setschedule.component.html',
  styleUrls: ['./setschedule.component.css'],
})
export class SetscheduleComponent implements OnInit {
  technologies: any;
  schedule!: FormGroup;
  userId:any;

  constructor(private data: SubjectService, private route:ActivatedRoute,private router:Router) {
this.userId = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.data.showMat().subscribe((res: any) => {
      console.log(res.technologies);
      this.technologies = res.technologies;
    });

    this.schedule = new FormGroup({
      dateTime: new FormControl('', [Validators.required]),
      Technologies: new FormControl('', [Validators.required]),
    });
  }

  get e(){
return this.schedule.controls
  }


  scheduleForm() {
    this.schedule.value.userId = this.userId
    console.log(this.schedule.value);
    this.data.setSchedule(this.schedule.value).subscribe({
      next: (result:any)=>{
        console.log(result); 
        if(result.status === 'success'){
          alert('date&time schedule successfully')
          this.router.navigateByUrl('')
        }       
      },error:(err:any)=>{
        console.log(err);        
      },complete:()=>{
        console.log('completed');     
        
      }
    })
  }
}
