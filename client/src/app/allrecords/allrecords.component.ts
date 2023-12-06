import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-allrecords',
  templateUrl: './allrecords.component.html',
  styleUrls: ['./allrecords.component.css'],
})
export class AllrecordsComponent implements OnInit {
  logId: any;
  filterId: any;
  filterDate: any;
  show:any;
  hide:any;
  formattedDate:any
  filterDataByDate:any="";
  selectedDate:any

  date:any

  constructor(
    private route: ActivatedRoute,
    private recordData: SubjectService
  ) {
    this.logId = this.route.snapshot.paramMap.get('id');
    console.log(this.logId);
  }

  ngOnInit(): void {
    this.getRecord();

this.date = new Date().toLocaleDateString('en-GB');
console.log(this.date);

    
  }




  getRecord() {
    this.recordData.getRecord().subscribe((res: any) => {
      console.log(res.Show);

      this.filterId = res.Show.filter((item: any) => item.ansBy === this.logId);
      console.log(this.filterId);


      this.filterDate = this.filterId.filter((item:any)=> item.date === this.date)

      console.log(this.filterDate);
      


    });
  }


  onDateChange(event: any) {
    this.selectedDate = new Date(event.target.value).toLocaleDateString('en-GB');    
    console.log(this.selectedDate);
    this.filterDataByDate = this.filterId.filter((item:any)=> item.date === this.selectedDate)
    console.log(this.filterDataByDate);
    
  }



  toggleAnswer(section: 'show' | 'hide'){
    this.show = section === 'show'
  }

  



}
