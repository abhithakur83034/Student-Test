import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../services/subject.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  techName: any;
  user: any;
  userData: any;
  Role:any;
  filterAuthor: any;
  filterAuthorVideo:any;
  filterAuthorBlog:any;
  filterAuthorPdf:any;
  filterTech: any;
  filterVideo: any;
  filterBlog: any;
  filterPdf: any;
  Pdf: any;

  filtervideoForUser:any
  filterqusForUser:any
  filterblogForUser:any
  filterpdfForUser:any


  videoForUser:any
  qusForUser:any
  blogForUser:any
  pdfForUser:any


  url:any = 'http://localhost:9000/img/'




  ngOnInit(): any {
    this.techName = this.route.snapshot.paramMap.get('id');
    // console.log(this.techName);

this.showQues();
this.showVideo();
this.showBlog();
this.showPdf();

  }






  constructor(
    private route: ActivatedRoute,
    private contentData: SubjectService,
    config: NgbModalConfig,
		private modalService: NgbModal,private router:Router
  ) {

    config.backdrop = 'static';
		config.keyboard = false;



    this.user = localStorage.getItem('user');
    this.userData = this.user ? JSON.parse(this.user) : null;
    // console.log(this.userData);
    if (this.userData) {
      this.Role = this.userData.role;
    }




  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  openpdf(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'pdf-modal-title' });
  }

  viewpdf(){
    this.router.navigate(['/pdf', this.techName])  }




showQues(){
  this.contentData.sowQues().subscribe((res: any) => {
    // console.log(res);
    this.filterqusForUser = res.Show

    this.qusForUser = this.filterqusForUser.filter(
      (item: any) => item.tech === this.techName
    );




    this.filterAuthor = res.Show.filter(
      (item: any) => item.userId === this.userData._id
    );
    // console.log(this.filterAuthor);

    this.filterTech = this.filterAuthor.filter(
      (item: any) => item.tech === this.techName
    );
    console.log("ques",this.filterTech);
  });

}

 isCorrectAnswer(correctAns: string, currentOption: string): boolean {
    return correctAns === currentOption;
  }


showVideo(){
  this.contentData.showVideo().subscribe((res: any) => {
    // console.log(res);
    this.filtervideoForUser = res.Show
    // console.log(this.videoForUser);
    this.videoForUser = this.filtervideoForUser.filter(
      (item: any) => item.tech === this.techName
    );
    
    
    this.filterAuthorVideo = res.Show.filter(
      (item: any) => item.userId === this.userData._id
    );
    // console.log(this.filterAuthorVideo);

    this.filterVideo = this.filterAuthorVideo.filter(
      (item: any) => item.tech === this.techName
    );
    // console.log("vdo",this.filterVideo);
  });
}




showBlog(){
  this.contentData.showBlog().subscribe((res: any) => {
    // console.log(res);
    this.filterblogForUser = res.Show

    this.blogForUser = this.filterblogForUser.filter(
      (item: any) => item.tech === this.techName
    );


    this.filterAuthorBlog = res.Show.filter(
      (item: any) => item.userId === this.userData._id
    );
    // console.log(this.filterAuthorBlog);

    this.filterBlog = this.filterAuthorBlog.filter(
      (item: any) => item.tech === this.techName
    );
    // console.log("blog",this.filterBlog);
  });
}


showPdf(){
  this.contentData.showPdf().subscribe((res:any)=>{
    console.log("pdf response",res);
    this.filterAuthorPdf = res.Show.filter(
      (item: any) => item.userId === this.userData._id
    );
    // console.log(this.filterAuthorPdf);

    this.filterPdf = this.filterAuthorPdf.filter(
      (item: any) => item.tech === this.techName
    );
    // console.log("pdf",this.filterPdf);
  this.Pdf = this.filterPdf.filter((item:any)=> item.pdf)
  console.log(this.Pdf);
  
  })
}

startTest(){
  // console.log("show",show);
  this.router.navigate(['/start', this.techName])
}



}
