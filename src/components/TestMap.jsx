import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function TestMap() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MapContainer center={[26.8472065, 75.773574]} zoom={13} style={{ height: '500px', width: '80%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[26.8472065, 75.773574]}>
          <Popup>IR BOYS PG</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default TestMap; 