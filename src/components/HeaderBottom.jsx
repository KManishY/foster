import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
export const HeaderBottom = () => {
  const IconStyle = {
    fontSize: "65px",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "10px",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          backgroundColor: "#eeebeb",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "12px",
            color: "#bab4b4",
            width: "40%",
          }}
        >
          Karan
        </div>
        <div style={{ fontWeight: 700, fontSize: "12px" }}>
          Let's explore this evening
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          backgroundColor: "#eeebeb",
          width: "40%",
          borderRadius: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BiSolidOffer style={{ ...IconStyle, color: "#f22755" }} />
          </div>
          <div style={{ fontWeight: 700, fontSize: "12px", color: "#bab4b4" }}>
            Offers
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CiWallet style={{ ...IconStyle, color: "#6969eb" }} />
          </div>
          <div style={{ fontWeight: 700, fontSize: "12px", color: "#bab4b4" }}>
            Wallet
          </div>
        </div>
      </div>
    </div>
  );
};
