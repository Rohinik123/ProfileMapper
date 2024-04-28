import React from "react";

export default function Footer() {
  return (
    <div className="foot">
      <footer
        style={{
          width: "100%",
          textAlign: "center",
          position: "absolute",
          fontSize: "15px",
          backgroundColor: "black",
          padding: "21px",
          left: "0",
          color: "white",
        }}
      >
        <strong>Copyright © Text-Utilizer</strong>
      </footer>
    </div>
  );
}
