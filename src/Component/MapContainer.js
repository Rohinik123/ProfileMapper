import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./MapContainer.css";
import ProfileCard from "./Profilecard";

const profiles = [
  { id: 1, latitude: 37.7749, longitude: -122.4194 },
  { id: 2, latitude: 34.0522, longitude: -118.2437 },
  { id: 3, latitude: 40.7128, longitude: -74.006 },
];

const MapContainer = ({ profiles }) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.006 });
  const [zoom, setZoom] = useState(12);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(filterValue)
    );
    setFilteredProfiles(filtered);
  };

  const handleDeleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setFilteredProfiles(updatedProfiles);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        console.log("Error getting user location");
      }
    );
  }, []);

  return (
    <div className="map-container">
      <LoadScript
        googleMapsApiKey="AIzaSyCLOkMctPfkXzjre46lfY7_SXb330Tgilo"
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          onLoad={(map) => {
            setMap(map);
          }}
        >
          {filteredProfiles.map((profile) => (
            <Marker
              key={profile.id}
              position={{ lat: profile.latitude, lng: profile.longitude }}
            />
          ))}
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onDelete={handleDeleteProfile}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      <input
        type="text"
        placeholder="Search profiles..."
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default MapContainer;
