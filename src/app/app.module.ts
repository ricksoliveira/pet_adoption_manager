import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { PetListComponent } from './pets/pet-list.component';
import { AppComponent } from './app.component';
import { MoodComponent } from './moodStar/mood.component';
import { NavBarComponent } from './navBar/nav-bar.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { PetInfoComponent } from './pets/pet-Info/pet-info.component';


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    MoodComponent,
    NavBarComponent,
    ErrorNotFoundComponent,
    PetInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'pets', component: PetListComponent
      },
      {
        path: 'pets/info/:id', component: PetInfoComponent
      },
      {
        path: '', redirectTo: 'pets', pathMatch: 'full'
      },
      {
        path: '**', component: ErrorNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
