import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  rgisterUser(data: any) {
    return this.http.post('http://localhost:9000/api/register', data);
  }

  userLogin(data: any) {
    console.log(data);

    return this.http.post('http://localhost:9000/api/login', data);
  }


  //add-material**********************************************************************************************************
  addMat(data:any){
return this.http.post(`http://localhost:9000/api/addmaterial`,data)
  }



  //add-video**********************************************************************************************************
  addVideo(data:any){
return this.http.post(`http://localhost:9000/api/addvideo`,data)
  }



  //add-blog**********************************************************************************************************
  addBlog(data:any){
return this.http.post(`http://localhost:9000/api/addblog`,data)
  }


  //add-pdf**********************************************************************************************************
  addPdf(data:any){
return this.http.post(`http://localhost:9000/api/addpdf`,data)
  }


//show all technologies ***********************************************************************************************************

showMat(){
  return this.http.get(`http://localhost:9000/api/technologies`)
}


//show all coontent********************************************************************************************************************

sowQues(){
  return this.http.get(`http://localhost:9000/api/showmaterial`)
}


//show video*****************************************************************************************************************

showVideo(){
  return this.http.get(`http://localhost:9000/api/showvideo`)
}




//show blog*****************************************************************************************************************

showBlog(){
  return this.http.get(`http://localhost:9000/api/showblog`)
}



//show pdf*****************************************************************************************************************

showPdf(){
  return this.http.get(`http://localhost:9000/api/showpdf`)
}



//get edit Profile *************************************************************************************************************

registereduser(){
  return this.http.get(`http://localhost:9000/api/registereduser`)
}


//put edit profile*********************************************************************************************************************

updateProfile(data:any, id:any){
  console.log(data);
  console.log(id);
  
return this.http.put(`http://localhost:9000/api/update/${id}`,data)
}


//add record**************************************************************************************************************************

addRecord(data:any){
  console.log(data);
  return this.http.post(`http://localhost:9000/api/addrecords`,data)
}



//get record**************************************************************************************************************************

getRecord(){
  return this.http.get(`http://localhost:9000/api/getrecords`)
}



//set Schedule***************************************************************************************************************

setSchedule(data:any){
  return this.http.post(`http://localhost:9000/api/setschedule`,data)
}



}
