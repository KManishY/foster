import React from "react";
export const Header = () => {
  const headerStyle = {
    color: "#fff",
    padding: "10px",
    display: "flex",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    flexDirection: "column",
  };

  const leftColumnStyle = {
    alignItems: "center",
  };

  const preOrderStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
    color: "#bab4b4",
  };

  const humanIconStyle = {
    width: "15px", // Adjust the size of the human icon
    marginRight: "10px",
    marginLeft: "5px",
  };

  const connoughtPlaceStyle = {
    fontSize: "12px", // Adjust the font size as needed
    color: "black",
    fontWeight: 700,
  };

  return (
    <div style={headerStyle}>
      <div style={leftColumnStyle}>
        <div style={preOrderStyle}>
          <span style={{ fontWeight: 700, fontSize: "12px" }}>
            Pre Order Form
          </span>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/8atour/people-23.png"
            alt="Human Icon"
            style={humanIconStyle}
          />
        </div>
        <div style={connoughtPlaceStyle}>
          <span>Connought Place</span>
        </div>
      </div>
    </div>
  );
};
