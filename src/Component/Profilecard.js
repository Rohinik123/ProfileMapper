import React from "react";
import { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = ({ profile }) => {
  const [summary, setSummary] = useState(false);
  return (
    <div className="profile-card">
      <img src={profile.photo} />
      <h2>{profile.name}</h2>

      <button onClick={() => setSummary(!summary)}>Summary</button>
      {summary && <p>{profile.description}</p>}
    </div>
  );
};

export default ProfileCard;
