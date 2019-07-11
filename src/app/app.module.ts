import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConatacComponent } from './component/conatac/conatac.component';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment'

import { DataDbService } from './services/data-db.service';

import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    ConatacComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
    


  ],
  providers: [
    DataDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
