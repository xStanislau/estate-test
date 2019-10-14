import React from "react";
import Map from "../../components/Map/Map";
import "./Contacts.scss";
import Popup from "../../components/Popup/Popup";
import CallBackSideBar from "../../components/CallBackSideBar/CallBackSideBar";
import Notification from "../../components/Notification/Notification";

const Contacts = () => {
  return (
    <>
      <Popup>
        <Notification />
      </Popup>
      <CallBackSideBar />
      <main className="main-container mt-4 mb-4 px-35 contacts">
        <h1 className="mb-3 h1">Cotacts</h1>
        <h2 className="mb-2 h2">Belarus Development Center</h2>
        <ul className="mb-4">
          <li>EffectiveSoft Ltd.</li>
          <li>Moskovskaya St. 22/18, Minsk 220007, Belarus</li>
        </ul>
        <div className="contacts__map ">
          <Map className="map " />
        </div>
      </main>
    </>
  );
};

export default Contacts;
