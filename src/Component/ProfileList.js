import React, { useEffect, useState } from "react";
import ProfileDatas from "../ProfileDatas.json";
import ProfileCard from "./Profilecard";
import "./ProfileList.css";

const ProfileList = () => {
  const [profilesData, setProfilesData] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProfilesData(ProfileDatas);
    setFilteredProfiles(ProfileDatas);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setFilteredProfiles(ProfileDatas);
    } else {
      setFilteredProfiles(
        profilesData.filter((profile) =>
          profile.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="profile-list">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredProfiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
