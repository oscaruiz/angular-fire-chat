import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../environments/environment';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './services/chat.service';
import { LoginComponent } from './components/login/login.component';
import {provideStorage,getStorage} from '@angular/fire/storage'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    provideStorage(()=>getStorage())
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
