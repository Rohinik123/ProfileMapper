import React from "react";
import ProfileMap from "./ProfileMap";
import MapContainer from "./MapContainer";

const ProfileDetails = ({ profile }) => {
  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
      <ProfileMap profile={profile} />
      <MapContainer center={profile.location} zoom={15} />
    </div>
  );
};

export default ProfileDetails;
