import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { StartballComponent } from './components/startball/startball.component';
import { RegisterComponent } from './components/register/register.component';

import { ToastrModule } from 'ngx-toastr';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SssComponent } from './components/sss/sss.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    NaviComponent,
    HomeComponent,
    StartballComponent,
    RegisterComponent,
   
    FilterPipePipe,
    SidebarComponent,
    SssComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRVpm-AWAW2SHHIpLoE8Gotm7mJKLbgak'
    }),
    ToastrModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
