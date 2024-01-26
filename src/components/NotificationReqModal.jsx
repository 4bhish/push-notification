import React,{ useContext }  from 'react';
import './NotificationReqModal.css'
import { generateToken } from '../notification/firebase.config';
import { permissionProvider } from '../NotificContext';

const NotificationReqModal = () => {

  const {setShowModal} = useContext(permissionProvider)
  

    function handleRequestGen(){
        generateToken()
        setShowModal(false)
    }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Allow Notifications</h2>
          <button className="close-button">×</button>
        </div>
        <div className="modal-body">
          <p>To get the latest updates, Click on Allow Above.</p>
        </div>
        <div className="modal-footer">
          <button onClick={handleRequestGen} className="button">Send Notification</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationReqModal;
