
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyCQ0HR7Jbeo-IVgYKNFv3_cznVpCuI_Qe0",
  authDomain: "push-notification-9aa00.firebaseapp.com",
  projectId: "push-notification-9aa00",
  storageBucket: "push-notification-9aa00.appspot.com",
  messagingSenderId: "760446349143",
  appId: "1:760446349143:web:4f8e271a5ba367a02ad812"
};


const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();


// const savePermissionStatus = (status) => {
//   localStorage.setItem('notificationPermission', status);
// }

// const getPermission = async () => {
//   const permissionStatus = await Notification.requestPermission()
//   savePermissionStatus(permissionStatus) 
//   return permissionStatus
// }


export const generateToken = async() => {
  // const permission = await getPermission()

  const permissionStatus = await Notification.requestPermission()

  if(permissionStatus === 'granted'){
    const token = await getToken(messaging,{vapidKey:'BHNoKuxbLEag-PXrt7SvFO7APd6DnoLs4AiOSrN9Q-r58V567Ac7mZREgd6887pYWFum3_nARc74OJPivj6yuzo'})

    console.log(token)
  } else if(permissionStatus === 'denied'){
    alert('you have denied permission pls allow in browser setting')
  }
}

