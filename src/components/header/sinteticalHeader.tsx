import { useState } from "react";
import {
  Header,
  Logo,
  Links,
  Profile,
  ProfileModal,
  Options,
  NotificationButton,
  ProfilePic,
  OptionButton,
} from "./sinteticalHeader.styles.tsx";
import Modal from "./notifications/Modal.tsx";
import PictureModal from "./profile/PictureModal.tsx";
import ProfilePicture from "../../assets/profilePic.jpg";
import LogoPicture from "../../assets/simpleLogo.png";
import NotificationSimbol from "../../assets/notifications.svg";

function SinteticalHeader() {
  const [openModals, setOpenModals] = useState<
    "notification" | "picture" | null
  >(null);

  return (
    <>
      <Header>
        <Logo>
          <img src={LogoPicture} />
          <p>Gallery</p>
        </Logo>

        <Links>
          <p>Home</p>
          <p>Explore</p>
          <p>Create</p>
        </Links>

        <Profile>
          <NotificationButton
            onClick={() =>
              setOpenModals(
                openModals === "notification" ? null : "notification"
              )
            }
          >
            <img src={NotificationSimbol} />
          </NotificationButton>

          <ProfilePic
            src={ProfilePicture}
            onClick={() =>
              setOpenModals(openModals === "picture" ? null : "picture")
            }
          />
        </Profile>
      </Header>

      {/* Notifications */}
      <Modal isOpen={openModals === "notification"}>
        There's nothing to see here
      </Modal>

      {/* Profile Picture */}
      <PictureModal isOpen={openModals === "picture"}>
        <ProfileModal>
          <div className="imageContainer">
            <img className="img" src={ProfilePicture} />
            <div className="profileInfo">
            <p className="username">Lara Moreno</p>
            <p className="handle">@laraMoreno</p>
            </div>
          </div>
        </ProfileModal>
          <Options>
            <OptionButton><p>View Profile</p></OptionButton>
            <OptionButton><p>Set Theme</p></OptionButton>
          </Options>
      </PictureModal>
    </>
  );
}

export default SinteticalHeader;
