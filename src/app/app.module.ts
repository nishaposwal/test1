import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSortableModule } from 'ngx-sortable';
import { CandidateComponent } from './components/candidate/candidate.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DroppedCandidateComponent } from './components/dropped-candidate/dropped-candidate.component';
import { ExtendedCandidateComponent } from './components/extended-candidate/extended-candidate.component'

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HeaderComponent,
    HomeComponent,
    DroppedCandidateComponent,
    ExtendedCandidateComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
