import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatSidenavModule, MatSelectModule, MatListModule, MatIconModule, MatTabsModule, MatExpansionPanel, MatExpansionModule} from '@angular/material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './commons/http-interceptor';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';
import { TripComponent } from './components/trip/trip.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    UserProfileComponent,
    MyTripsComponent,
    TripComponent,
    ParticipantsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
