
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from 'firebase/messaging'
import { getDatabase, push, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCQ0HR7Jbeo-IVgYKNFv3_cznVpCuI_Qe0",
  authDomain: "push-notification-9aa00.firebaseapp.com",
  projectId: "push-notification-9aa00",
  storageBucket: "push-notification-9aa00.appspot.com",
  messagingSenderId: "760446349143",
  appId: "1:760446349143:web:4f8e271a5ba367a02ad812",
  databaseURL:'https://push-notification-9aa00-default-rtdb.firebaseio.com/',
};


const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
export const db = getDatabase(app)




export const generateToken = async() => {

  const permissionStatus = await Notification.requestPermission()

  if(permissionStatus === 'granted'){
    const token = await getToken(messaging,{vapidKey:'BHNoKuxbLEag-PXrt7SvFO7APd6DnoLs4AiOSrN9Q-r58V567Ac7mZREgd6887pYWFum3_nARc74OJPivj6yuzo'})
    writeToken(token)
    console.log(token)
  } else if(permissionStatus === 'denied'){
    alert('you have denied permission pls allow in browser setting')
  }
}

function writeToken(token){
  const tokensRef = ref(db,'token')

  push(tokensRef,{
    token:token
  })
}

