// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const ProfileMap = ({ profile }) => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);

//   useEffect(() => {
//     const mapOptions = {
//       center: { lat: profile.latitude, lng: profile.longitude },
//       zoom: 12,
//     };
//     setMap(new google.maps.Map(document.getElementById("map"), mapOptions));
//     setMarker(
//       new google.maps.Marker({
//         position: { lat: profile.latitude, lng: profile.longitude },
//         map: map,
//       })
//     );
//   }, [profile]);

//   return <div id="map" style={{ height: "500px", width: "800px" }} />;
// };

// export default ProfileMap;
