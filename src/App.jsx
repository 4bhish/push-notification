import "./App.css";

import NotificationReqModal from "./components/NotificationReqModal";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

import { useContext, useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { permissionProvider } from "./NotificContext";
import { getMessaging, onMessage } from "firebase/messaging";

function App() {
  const { showModal, setShowModal } = useContext(permissionProvider);

  const [hasRenderedOnce, setHasRenderedOnce] = useState(false);

  useEffect(() => {
    const hasOpenedBefore = localStorage.getItem("hasOpenedBefore");

    if (!hasOpenedBefore) {
      setHasRenderedOnce(true);
      localStorage.setItem("hasOpenedBefore", true);
    }

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
  
    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {hasRenderedOnce && showModal && <NotificationReqModal />}

      <header>
        <nav style={{ display: "flex", gap: "3rem" }}>
          <div>
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div>
            <NavLink to={"/profile"}>Profile</NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
