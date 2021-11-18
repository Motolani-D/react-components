import React from "react";
import "./profilePhoto.css";

function ProfilePhoto() {
  return (
    <div className="photoDiv">
      <img
        src="./images/pp.jpg"
        alt="profilePhoto"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
export default ProfilePhoto;
