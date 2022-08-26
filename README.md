# AngularChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Scope of the project

The original idea of this project came from [Mouredev's september monthly challenges](https://go.rviewer.io/dev-firebase-chat-es/?utm_source=mouredev&utm_medium=github_repo&utm_campaign=firebase_chat_mouredev).

These were the requirements of the application:

-Login with Google account.

-Chat application that display the chat messages of each user to each side of the screen.

-Implementation of firebase as a backend. Saving the sessions and the chats in the server. 

When developing the application I found, [Fernando Herrera's youtube video series](https://www.youtube.com/watch?v=gOQO-mHEV04&list=PLCKuOXG0bPi2rr1Acdtjy5l7Pa_SlSy8I&index=1&ab_channel=FernandoHerrera) that I highly recommend and which I used as a reference for this code.

I updated some of the libraries to be compatible with the latest versions of Angular.

## NOTES

The project is finished and working locally.
There is a version deployed on firebase that can be tested --> [here.](https://angular-chat-2fed4.web.app/)

![image](https://user-images.githubusercontent.com/8970177/186748374-938370db-d5ff-404b-885c-4c7e355d4534.png)

You will need to set up your firebase environment: create a project that accepts googgle authentatication and enable it.
From the Angular code, you will need to create the folder and file environment/environments.ts

with your own credentials, (that can be found in firestore)

export const environment = {
  production: false,
};

export const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xx",
  projectId: "xx",
  storageBucket: "xxx",
  messagingSenderId: "xxxxx",
  appId: "xxxx"
};

## TO DO
At the moment, I am integrating the chat with the upload of images to the firebase backend.
