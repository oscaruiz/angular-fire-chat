import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { AngularFireStorage} from '@angular/fire/compat/storage';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  
  //rename
  message: string="";
  element:any;

  constructor(public chatservice:ChatService, private storage: AngularFireStorage) { 
    this.chatservice.load_messages()
      .subscribe(()=>{
        this.element.scrollTop=this.element.scrollHeight;
      })
  }

  ngOnInit(): void {
    this.element=document.getElementById('app-mensajes');
  }

  sendMessage(){
    console.log(this.message);

    if(this.message.length===0){
      return;
    }

    this.chatservice.add_message(this.message)

    this.message="";
  }

  uploadImage($event:any){
    const file = $event.target.files[0];
    const imgRef="images/"+file.name;
    this.storage.upload(imgRef,file)
    .then(response=>console.log(response))
    .catch(error=>console.log(error));
  }

  getImages(){
    const imagesRef = this.storage.ref('images');
  }

}
