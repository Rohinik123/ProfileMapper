import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileCard from "./Component/Profilecard";
import ProfileDetails from "./Component/Profiledetails";
import "./Style.css";
import images from "../src/Component/images/Riya de.jpg";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import MapContainer from "./Component/MapContainer";

const App = () => {
  const profiles = [
    {
      id: 1,
      name: "Riya De",
      photo: "images",
      description: "Software Engineer",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    {
      id: 2,
      name: "Caroline",
      photo: "jane-doe.jpg",
      description: "Marketing Manager",
      latitude: 37.7859,
      longitude: -122.4364,
    },
    {
      id: 3,
      name: "Bob Smith",
      photo: "https://example.com/bob-smith.jpg",
      description: "Mauris eget eros at nisi convallis consectetur.",
      location: {
        lat: 40.7056,
        lng: -74.0144,
      },
    },
    {
      id: 4,
      name: "Alice Johnson",
      photo: "https://example.com/alice-johnson.jpg",
      description:
        "Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros nisi blandit odio, sed non aliquet massa nisi quis neque.",
      location: {
        lat: 40.7345,
        lng: -73.9921,
      },
    },
    {
      id: 5,
      name: "Charlie Brown",
      photo: "https://example.com/charlie-brown.jpg",
      description:
        "In facilisis nisl et sapien lacinia, nec vestibulum velit tempus.",
      location: {
        lat: 40.7618,
        lng: -73.988,
      },
    },
    {
      id: 6,
      name: "David Williams",
      photo: "https://example.com/david-williams.jpg",
      description: "Nullam id dolor id nibh ultricies vehicula.",
      location: {
        lat: 40.727,
        lng: -74.0091,
      },
    },
    {
      id: 7,
      name: "Eva Garcia",
      photo: "https://example.com/eva-garcia.jpg",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      location: {
        lat: 40.7489,
        lng: -73.9791,
      },
    },
    {
      id: 8,
      name: "Frank Miller",
      photo: "https://example.com/frank-miller.jpg",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, velit mauris egestas quam, ut aliquam massa nisi quis neque.",
      location: {
        lat: 40.7168,
        lng: -74.0181,
      },
    },
    {
      id: 9,
      name: "Grace Lee",
      photo: "https://example.com/grace-lee.jpg",
      description:
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
      location: {
        lat: 40.7529,
        lng: -73.9951,
      },
    },
  ];

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="profile-list">
              {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          }
        />
        <Route exact path="/about" element={<About key="abt" />} />
        <Route
          exact
          path="/profiles/:id"
          element={<ProfileDetails profiles={profiles} />}
        />
        <Route
          exact
          path="map"
          element={<MapContainer profiles={profiles} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
