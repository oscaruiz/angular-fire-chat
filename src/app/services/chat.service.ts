import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Message } from '../interfaces/message.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private messageCollection: AngularFirestoreCollection<Message> | undefined;
 
  public chats: Message[]=[];

  public chatUser:any={};

  constructor(private afs: AngularFirestore,public auth: AngularFireAuth) { 
    this.auth.authState.subscribe(user=>{
      console.log('Users state: ', user);

      if(!user){
        return;//user doesn't exist
      }
      this.chatUser.name=user.displayName;
      this.chatUser.uid=user.uid;

    })
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  logout() {
    this.chatUser={};
    this.auth.signOut();
  }

  load_messages(){
    this.messageCollection = this.afs.collection<Message>('chats',ref=>ref.orderBy('date','desc').limit(10));
    
    return this.messageCollection.valueChanges()
    .pipe(
                                  map( (messages:Message[]) =>{
                                    console.log(messages);
                                    this.chats=[];
                                    for(let message of messages){
                                      this.chats.unshift(message);
                                    }
                                    return this.chats;
                                }))
  }

  add_message(text:string){
    let message: Message={
      name:this.chatUser.name,
      message:text,
      date: new Date().getTime(),
      uid:this.chatUser.uid
    }

    this.messageCollection?.add(message);

  }
}
