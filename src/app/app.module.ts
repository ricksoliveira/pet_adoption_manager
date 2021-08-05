import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PetListComponent } from './pets/pet-list.component';
import { AppComponent } from './app.component';
import { MoodComponent } from './moodStar/mood.component';
import { NavBarComponent } from './navBar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    MoodComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'pets', pathMatch: 'full'
      },
      {
        path: 'pets', component: PetListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
