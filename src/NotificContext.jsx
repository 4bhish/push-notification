import React, { createContext, useState } from 'react';

export const permissionProvider = createContext()

export default function NotificContext({children}) {
  const [showModal, setShowModal] = useState(false);

  const [persmissionSts,setPermissionSts] = useState('default')

  return (
    <permissionProvider.Provider value={{persmissionSts,setPermissionSts,showModal,setShowModal}}>
      {children}
    </permissionProvider.Provider>
  );
}
