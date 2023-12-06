import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css'],
})
export class AddtestComponent implements OnInit {
  blogForm!: FormGroup;
  videoForm!: FormGroup;
  techForm!: FormGroup;
  pdfForm!: FormGroup;
  fileInp: any;
  user: any;
  userDetails: any;
  userId: any;
  addBlog: any;
  addvideo: any;
  addques: any;
  addpdf: any;

  constructor(private userData: SubjectService) {
    this.user = localStorage.getItem('user');
    this.userDetails = this.user ? JSON.parse(this.user) : null;
    this.userId = this.userDetails._id;
  }

  ngOnInit(): void {
    this.techForm = new FormGroup({
      // image: new FormControl('', [Validators.required]),
      tech: new FormControl('', [Validators.required]),
      qus: new FormControl('', [Validators.required]),
      ans1: new FormControl('', [Validators.required]),
      ans2: new FormControl('', [Validators.required]),
      ans3: new FormControl('', [Validators.required]),
      ans4: new FormControl('', [Validators.required]),
    });

    this.videoForm = new FormGroup({
      video: new FormControl('', [Validators.required]),
      tech: new FormControl('', [Validators.required]),
    });

    this.pdfForm = new FormGroup({
      pdf: new FormControl('', [Validators.required]),
      tech: new FormControl('', [Validators.required]),
    });

    this.blogForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
      tech: new FormControl('', [Validators.required]),
      blogstitle: new FormControl('', [Validators.required]),
      blogsbody: new FormControl('', [Validators.required]),
    });
  }

  get e() {
    return this.techForm.controls;
  }
  get v() {
    return this.videoForm.controls;
  }

  get b() {
    return this.blogForm.controls;
  }

  get p() {
    return this.pdfForm.controls;
  }

  onFileChange(event: any) {
    this.fileInp = event.target.files[0];
    console.log(this.fileInp);
  }

  techData() {
    console.log(this.techForm.value);
    let FORMDATA = this.techForm.value;
    console.log(FORMDATA);

    let formData = new FormData();
    // formData.set('image', this.fileInp);
    formData.set('tech', FORMDATA.tech);
    formData.set('qus', FORMDATA.qus);
    formData.set('ans1', FORMDATA.ans1);
    formData.set('ans2', FORMDATA.ans2);
    formData.set('ans3', FORMDATA.ans3);
    formData.set('ans4', FORMDATA.ans4);
    formData.set('userId', this.userId);

    this.userData.addMat(formData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('added');
      },
    });
  }

  videoData() {
    console.log(this.videoForm.value);

    let FORMDATA = this.videoForm.value;
    console.log(FORMDATA);

    let formData = new FormData();
    formData.set('video', this.fileInp);
    formData.set('tech', FORMDATA.tech);
    formData.set('userId', this.userId);

    this.userData.addVideo(formData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('added');
      },
    });
  }

  blogData() {
    console.log(this.blogForm.value);

    let FORMDATA = this.blogForm.value;
    console.log(FORMDATA);

    let formData = new FormData();
    formData.set('image', this.fileInp);
    formData.set('tech', FORMDATA.tech);
    formData.set('blogstitle', FORMDATA.blogstitle);
    formData.set('blogsbody', FORMDATA.blogsbody);
    formData.set('userId', this.userId);

    this.userData.addBlog(formData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('added');
      },
    });
  }

  toggleSection(section: string): void {
    this.addBlog = section === 'blog';
    this.addvideo = section === 'video';
    this.addques = section === 'ques';
    this.addpdf = section === 'pdf';
  }

  pdfUpload() {
    console.log(this.pdfForm.value);

    let FORMDATA = this.pdfForm.value;
    console.log(FORMDATA);

    let formData = new FormData();
    formData.set('pdf', this.fileInp);
    formData.set('tech', FORMDATA.tech);
    formData.set('userId', this.userId);

    this.userData.addPdf(formData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('added');
        alert('pdf');
      },
    });
  }
}
