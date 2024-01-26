import { onMessage } from "firebase/messaging";

importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyCQ0HR7Jbeo-IVgYKNFv3_cznVpCuI_Qe0",
    authDomain: "push-notification-9aa00.firebaseapp.com",
    projectId: "push-notification-9aa00",
    storageBucket: "push-notification-9aa00.appspot.com",
    messagingSenderId: "760446349143",
    appId: "1:760446349143:web:4f8e271a5ba367a02ad812"
});


const messaging = firebase.messaging();




messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });


  messaging.onMessage((payload) => {
    console.log("Message received. ", payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
});
