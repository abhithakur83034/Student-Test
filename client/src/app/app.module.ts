import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { StarttestComponent } from './starttest/starttest.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddtestComponent } from './addtest/addtest.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewpdfComponent } from './viewpdf/viewpdf.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AllrecordsComponent } from './allrecords/allrecords.component';
import { SetscheduleComponent } from './setschedule/setschedule.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    StarttestComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AddtestComponent,
    ContentComponent,
    ViewpdfComponent,
    EditprofileComponent,
    AllrecordsComponent,
    SetscheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule,HttpClientModule,SlickCarouselModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
