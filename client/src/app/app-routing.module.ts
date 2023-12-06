import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarttestComponent } from './starttest/starttest.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AddtestComponent } from './addtest/addtest.component';
import { ContentComponent } from './content/content.component';
import { ViewpdfComponent } from './viewpdf/viewpdf.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AllrecordsComponent } from './allrecords/allrecords.component';
import { SetscheduleComponent } from './setschedule/setschedule.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'addtest', component: AddtestComponent},
  {path:'account', component: ProfileComponent},
  {path:'start/:id' , component: StarttestComponent},
  {path:'pdf/:id' , component: ViewpdfComponent},
  {path:'content/:id' , component: ContentComponent},
  {path:'editprofile/:id' , component: EditprofileComponent},
  {path:'record/:id' , component: AllrecordsComponent},
  {path:'schedule/:id' , component: SetscheduleComponent},
  {path:'**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
