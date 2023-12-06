import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { SubjectService } from '../services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-starttest',
  templateUrl: './starttest.component.html',
  styleUrls: ['./starttest.component.css'],
})
export class StarttestComponent implements OnInit {
  techName: any;
  user: any;
  userData: any;
  Role: any;
  filterqusForUser: any;
  qusForUser: any;
  selectedAnswers: string[] = [];
  correctAns: any;
  showans: any;
  hideans: any;
  checkans: any;

  filterAuthorPdf: any;
  filterPdf: any;
  Pdf: any;

  correctCount:any;

  timer:any;
  totalTimeInSeconds = 60; // set minutes in sec
  timeRemaining: any;




  url: any = 'http://localhost:9000/img/';
  pdfurl: any = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor(
    private route: ActivatedRoute,
    private event: EventService,
    private material: SubjectService,
    private router: Router
  ) {
    this.techName = this.route.snapshot.paramMap.get('id');

    this.user = localStorage.getItem('user');
    this.userData = this.user ? JSON.parse(this.user) : null;
    if (this.userData) {
      this.Role = this.userData.role;
    }
  }

  ngOnInit(): void {
    this.showQues();
    this.showPdf();
    this.startTimer()
  }

  startTimer() {
    this.timeRemaining = this.totalTimeInSeconds; 
  
     this.timer = setInterval(() => {
      this.timeRemaining--;
  
      if (this.timeRemaining <= 0) {
        clearInterval(this.timer);
        this.router.navigate(['/record',this.userData._id]);
        alert('Form Submitted!')
        this.onSubmit()
      }
    }, 1000);
  }

 
  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;

    return `${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }



  onSelectAnswer(questionIndex: any, option: any) {
    this.selectedAnswers[questionIndex] = option;
  }

  onSubmit() {
    if (this.selectedAnswers.length === this.qusForUser.length) {
      console.log('Selected Answers:', this.selectedAnswers);

      this.checkans = this.qusForUser.filter((item: any, index: number) => {
        return item.answer === this.selectedAnswers[index];
      });

      console.log('Correct Answers:', this.checkans);
        this.checkans.map((item:any)=>item.ansBy = this.userData._id)
      this.material.addRecord(this.checkans).subscribe({
        next: (result:any)=>{
          console.log("added record",result);          
        },error:(err:any)=>{
          console.log(err);
        },complete:()=>{
          console.log("added ");
          
        },
      })



      this.correctCount = this.checkans.length;
      console.log('Number of Correct Answers:', this.correctCount);
      alert('Number of Correct Answers  : ' + this.correctCount);
      clearInterval(this.timer);
        this.router.navigate(['/record',this.userData._id]);
        alert('Form Submitted!')
      this.showQues();
    } else {
      console.log("You didn't answer all the questions.");
      alert("You didn't answer all the questions.");
      alert('Number of Correct Answers  : ' + this.correctCount);

    }
  }

  showQues() {
    this.material.sowQues().subscribe((res: any) => {
      this.filterqusForUser = res.Show;
      this.qusForUser = this.filterqusForUser.filter(
        (item: any) => item.tech === this.techName
      );
      console.log('from start', this.qusForUser);

      this.correctAns = this.qusForUser.map((item: any) => item.answer);
      console.log('Correct Answers', this.correctAns);
    });
  }

  toggleAnswer(questionIndex: number, action: 'show' | 'hide') {
    this.qusForUser[questionIndex].showans = action === 'show';
  }

  showPdf() {
    this.material.showPdf().subscribe((res: any) => {
      console.log('pdf response', res);
      this.filterAuthorPdf = res.Show.filter(
        (item: any) => item.userId === this.userData._id
      );
      // console.log(this.filterAuthorPdf);

      this.filterPdf = this.filterAuthorPdf.filter(
        (item: any) => item.tech === this.techName
      );
      // console.log("pdf",this.filterPdf);
      this.Pdf = this.filterPdf.filter((item: any) => item.pdf);
      console.log(this.Pdf);
    });
  }
}
