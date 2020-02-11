import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatSidenavModule, MatSelectModule, MatListModule, MatIconModule, MatTabsModule, MatExpansionPanel, MatExpansionModule, MatTreeModule, MatDatepickerModule, NativeDateAdapter, MatNativeDateModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './commons/http-interceptor';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';
import { TripComponent } from './components/trip/trip.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { TripFormComponent } from './components/trip-form/trip-form.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';

@NgModule({

  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    UserProfileComponent,
    MyTripsComponent,
    TripComponent,
    ParticipantsComponent,
    ScheduleComponent,
    ExpenseComponent,
    TripFormComponent,
    ScheduleFormComponent
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
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,

  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TripFormComponent,
    ScheduleFormComponent
  ]
})
export class AppModule { }
