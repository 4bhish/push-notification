import React, { useEffect, useState } from 'react';
import './ToggleSwitch.css'; 
import { generateToken, messaging } from './notification/firebase.config';
import { getToken } from 'firebase/messaging';

const ToggleSwitch = () => {
  const [permissionStatus,setPermissionStatus] = useState(Notification.permission)



  async function handleToggle(){

    if(Notification.permission === 'default'){
      await generateToken()
    }else if(Notification.permission === 'denied'){
      alert('Go to the Site setting and Allow for notification')
    } else if(Notification.permission === 'granted'){
      const token = await getToken(messaging,{vapidKey:'BHNoKuxbLEag-PXrt7SvFO7APd6DnoLs4AiOSrN9Q-r58V567Ac7mZREgd6887pYWFum3_nARc74OJPivj6yuzo'})
      console.log(token);
    }
    setPermissionStatus(Notification.permission)
  }

  console.log(Notification.permission)
  return (
    <div>
      <div className={`toggle-switch ${permissionStatus === 'granted' ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className="slider"></div>
    </div>
    <h3>Notifications {permissionStatus === 'granted' ? 'On': 'Off'}</h3>
    </div>
  );
};

export default ToggleSwitch;
