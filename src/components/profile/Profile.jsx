import "./profile.css";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import defaultAvatar from "../../assets/profile.png";
import cameraIcon from "../../assets/camera.png";

export const Profile = () => {
  const { state: userData } = useLocation();

  const [avatarUrl, setAvatarUrl] = useState(defaultAvatar);
  const filePickerRef = useRef(null);

  const triggerFilePicker = () => {
    filePickerRef.current?.click();
  };

  const updateAvatar = (event) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile || !selectedFile.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      setAvatarUrl(target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="profile">
      <header className="banner">Account Settings</header>

      <main className="page">
        <section className="content content-profile">
          <div className="profile-wrapper">
            <div className="profile-details">
              <div className="pfp-group">
                <img
                  id="pfp"
                  src={avatarUrl}
                  alt="User Avatar"
                  title="User Avatar"
                />

                <div className="upload-btn-wrapper" onClick={triggerFilePicker}>
                  <img
                    id="upload-btn"
                    src={cameraIcon}
                    alt="Upload Avatar"
                    title="Upload Avatar"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={filePickerRef}
                    style={{ display: "none" }}
                    onChange={updateAvatar}
                  />
                </div>
              </div>

              <div className="user-info">
                <h4 className="profile-name">
                  {userData?.name || "Marry Doe"}
                </h4>
                <p className="profile-email">
                  {userData?.email || "marry@gmail.com"}
                </p>
              </div>
            </div>

            <p className="description shorter-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="divider" />
        </section>
      </main>
    </div>
  );
};
