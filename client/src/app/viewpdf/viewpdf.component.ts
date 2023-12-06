import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { SubjectService } from '../services/subject.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-viewpdf',
  templateUrl: './viewpdf.component.html',
  styleUrls: ['./viewpdf.component.css']
})
export class ViewpdfComponent implements OnInit {
  techName:any;
  user:any;
  userData:any;
  Role:any;
  filterAuthorPdf:any;
  filterPdf:any;
  Pdf:any;


  url:any = 'http://localhost:9000/img/';


  ngOnInit(): void {
    this.showPdf()
  }

  
  constructor(
    private route: ActivatedRoute,
    private event: EventService,
    private material: SubjectService,
    private router: Router,
    private http: HttpClient
  ) {
    this.techName = this.route.snapshot.paramMap.get('id');
      console.log(this.techName);
      



    this.user = localStorage.getItem('user');
    this.userData = this.user ? JSON.parse(this.user) : null;
    console.log(this.userData);
    
    if (this.userData) {
      this.Role = this.userData.role;
    }
  }




  showPdf(){
    this.material.showPdf().subscribe((res:any)=>{
      console.log("pdf response",res);
      this.filterAuthorPdf = res.Show
      console.log(this.filterAuthorPdf);
  
      this.filterPdf = this.filterAuthorPdf.filter(
        (item: any) => item.tech === this.techName
      );
      // console.log("pdf",this.filterPdf);
    this.Pdf = this.filterPdf.filter((item:any)=> item.pdf)
    console.log(this.Pdf);
    
    })
  }


  download(pdf: any) {
    console.log("downloading!...", pdf);
    
    // Assuming 'url' is a string representing the base URL
    const baseURL = 'http://localhost:9000/img/';
    const URL = `${baseURL}${pdf}`;

    this.http.get(URL, { responseType: "arraybuffer" }).subscribe(
      (pdfData: ArrayBuffer) => {
        const blob = new Blob([pdfData], { type: "application/pdf" });
        const fileName = "downloded";
        saveAs(blob, fileName);
      },
      err => {
        console.log("err->", err);
      }
    );
  }


}
