import { useState } from "react";
import "./sinteticalHeader.css";
import Modal from "../notifications/Modal.tsx";
import PictureModal from "./PictureModal.tsx";
import '../../style.tsx'

function SinteticalHeader() {
   const [openModals, setOpenModals] = useState<"notification" | "picture" | null>(null);

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="./src/assets/simpleLogo.png" />
          <p>Gallery</p>
        </div>
        <div className="links">
          <p>Home</p>
          <p>Explore</p>
          <p>Create</p>
        </div>
        <div className="profile">
          <button
            className="notification"
            onClick={() => setOpenModals(openModals === "notification" ? null : "notification")}
          >
            <img src="./src/assets/notifications.svg" />
          </button>
          <img src="./src/assets/profilePic.jpg" className="profilePic" onClick={() => setOpenModals(openModals === "picture" ? null : "picture")} />
        </div>
      </header>
      {/* Notifications */}
      <Modal isOpen={openModals === 'notification'}>There's nothing to see here</Modal>
      {/* Profile Picture */}
      <PictureModal isOpen={openModals === 'picture'}>
        <div className="profileModal">
        <div>
          <img className="img" src="./src/assets/profilePic.jpg" />
        </div>
        <div className="options">
          <p>View Profile</p>
          <p></p>
        </div>
        </div>
      </PictureModal>
    </div>
  );
}

export default SinteticalHeader;
